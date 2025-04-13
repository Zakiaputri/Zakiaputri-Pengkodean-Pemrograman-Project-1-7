let dataBarang = [];

function renderTabel() {
  const tbody = document.querySelector('#tabelBarang tbody');
  tbody.innerHTML = '';
  dataBarang.forEach((barang, index) => {
    const row = `
      <tr>
        <td>${barang.nama}</td>
        <td>${barang.stok}</td>
        <td>Rp${barang.harga}</td>
        <td><button onclick="hapusBarang(${index})">Hapus</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function tambahBarang() {
  const nama = document.getElementById('namaBarang').value;
  const stok = parseInt(document.getElementById('stokBarang').value);
  const harga = parseInt(document.getElementById('hargaBarang').value);

  if (nama && !isNaN(stok) && !isNaN(harga)) {
    dataBarang.push({ nama, stok, harga });
    renderTabel();
    document.getElementById('namaBarang').value = '';
    document.getElementById('stokBarang').value = '';
    document.getElementById('hargaBarang').value = '';
  } else {
    alert('Lengkapi semua data!');
  }
}

function hapusBarang(index) {
  dataBarang.splice(index, 1);
  renderTabel();
}

renderTabel();
