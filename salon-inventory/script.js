document.addEventListener('DOMContentLoaded', () => {
    loadInventory();

    document.getElementById('add-item-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch('backend/add_item.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('Item added successfully!');
                loadInventory();
                e.target.reset();
            }
        });
    });
});

function loadInventory() {
    fetch('backend/get_items.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('inventory-table');
            tableBody.innerHTML = '';

            let totalItems = 0, lowStock = 0, totalValue = 0;

            data.forEach(item => {
                totalItems++;
                if (item.quantity < 10) lowStock++;
                totalValue += item.quantity * item.price;

                const row = `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.item_name}</td>
                        <td>${item.category}</td>
                        <td>${item.quantity}</td>
                        <td>Rs. ${item.price}</td>
                        <td>${item.purchase_date}</td>
                        <td>${item.status}</td>
                        <td>
                            <button onclick="updateItem(${item.id}, ${item.quantity}, '${item.status}')">Update</button>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

            document.getElementById('total-items').textContent = totalItems;
            document.getElementById('low-stock').textContent = lowStock;
            document.getElementById('total-value').textContent = `Rs. ${totalValue.toFixed(2)}`;
        });
}

function updateItem(id, quantity, status) {
    const newQuantity = prompt('Enter new quantity:', quantity);
    const newStatus = prompt('Enter new status (In Stock/Low Stock/Out of Stock):', status);

    if (newQuantity && newStatus) {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('quantity', newQuantity);
        formData.append('status', newStatus);

        fetch('backend/update_item.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('Item updated successfully!');
                loadInventory();
            }
        });
    }
}