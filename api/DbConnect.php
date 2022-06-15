<?php
	/**
	* Database Connection
	*/
	class DbConnect {
		private $server = 'sql100.byetcluster.com';
		private $dbname = 'epiz_31680390_test2';
		private $user = 'epiz_31680390';
		private $pass = 'Sv0VF4281K8k';

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
		}
        
	}
?>