<?php
include 'config.php';

$stmt = $pdo->query("SELECT * FROM inventory");
$items = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($items);
?>