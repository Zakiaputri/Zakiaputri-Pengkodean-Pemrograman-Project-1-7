<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $item_name = $_POST['item_name'];
    $category = $_POST['category'];
    $quantity = $_POST['quantity'];
    $price = $_POST['price'];
    $purchase_date = $_POST['purchase_date'];

    $stmt = $pdo->prepare("INSERT INTO inventory (item_name, category, quantity, price, purchase_date) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$item_name, $category, $quantity, $price, $purchase_date]);

    echo json_encode(['status' => 'success']);
}
?>