<?php
$host = 'localhost';
$db = 'salon_inventory';
$user = 'root'; // Replace with your MySQL username
$pass = '';     // Replace with your MySQL password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>