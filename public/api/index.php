<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM Todos";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE todo_id = :todo_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':todo_id', $path[3]);
            $stmt->execute();
            $todos = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $todos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($todos);
        break;
    case "POST":
        $todo = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO Todos(todo_id, todo_title, todo_note, todo_duedate, todo_created_at) VALUES(null, :todo_title, :todo_note, :todo_duedate, :todo_created_at)";
        $stmt = $conn->prepare($sql);
        $todo_created_at = date('Y-m-d');
        $stmt->bindParam(':todo_title', $todo->todo_title);
        $stmt->bindParam(':todo_note', $todo->todo_note);
        $stmt->bindParam(':todo_duedate', $todo->todo_duedate);
        $stmt->bindParam(':todo_created_at', $todo_created_at);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $todo = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE Todos SET todo_title =:todo_title, todo_note =:todo_note, todo_duedate =:todo_duedate, todo_updated_at =:todo_updated_at WHERE todo_id = :todo_id";
        $stmt = $conn->prepare($sql);
        $todo_updated_at = date('Y-m-d');
        $stmt->bindParam(':todo_id', $todo->todo_id);
        $stmt->bindParam(':todo_title', $todo->todo_title);
        $stmt->bindParam(':todo_note', $todo->todo_note);
        $stmt->bindParam(':todo_duedate', $todo->todo_duedate);
        $stmt->bindParam(':todo_updated_at', $todo_updated_at);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM Todos WHERE todo_id = :todo_id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':todo_id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}