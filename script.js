// Ambil form dan table
const form = document.getElementById('buyerForm');
const buyersTable = document.getElementById('buyersTable').getElementsByTagName('tbody')[0];

// Fungsi untuk menambahkan data pembeli ke dalam table
function addBuyerData(name, product, quantity, date, lingkung) {
    const row = buyersTable.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = product;
    row.insertCell(2).innerText = quantity;
    row.insertCell(3).innerText = date;
    row.insertCell(4).innerText = lingkung;
}

// Tangani submit form
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const date = document.getElementById('date').value;
    const lingkung = document.getElementById('lingkung').value;

    // Tambahkan data pembeli ke tabel
    addBuyerData(name, product, quantity, date, lingkung);

    // Reset form setelah disubmit
    form.reset();
});
