<?php
	/**
	* Database Connection
	*/
	class DbConnect {
		private $server = '185.2.168.3';
		private $dbname = 'weekz_db';
		private $user = 'weekz_root';
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