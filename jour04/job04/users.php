<?php

class User {

private $conn;
public function __construct()
{
    try {
    $conn = new PDO("mysql:host=localhost;dbname=utilisateurs", "root", "");
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $this->conn=$conn;
    echo "Connected successfully"."<br>";
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
}
public function afficherTableau(){
$query=$this->conn->prepare("SELECT*FROM utilisateurs");
$query->execute();
$row=$query->fetchAll(PDO::FETCH_OBJ);
foreach ($row as $key) {
    $key->id."<br>";
    $key->nom."<br>";
    $key->prenom."<br>";
    $key->email."<br>";
    $json = json_encode($key);
    var_dump($json);
}
}
}
