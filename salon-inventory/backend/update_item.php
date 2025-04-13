<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $quantity = $_POST['quantity'];
    $status = $_POST['status'];

    $stmt = $pdo->prepare("UPDATE inventory SET quantity = ?, status = ?, last_updated = NOW() WHERE id = ?");
    $stmt->execute([$quantity, $status, $id]);

    echo json_encode(['status' => 'success']);
}
?>