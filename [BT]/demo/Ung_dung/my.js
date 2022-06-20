let products = [
    ['iphoen 13', 24000, 20],
    ['iphoen 14', 20000, 20],
    ['iphoen 15', 22000, 20],
    ['iphoen 156', 30000, 10],
];

function displaylistProducts() {
    let html = "<table>\n" +
        "    <thead>\n" +
        "    <tr>\n" +
        "      <td>STT</td>\n" +
        "      <td>Name</td>\n" +
        "      <td>Price</td>\n" +
        "      <td>Quality</td>\n" +
        "    </tr>\n" +
        "    </thead>\n";

    products.forEach(function (item, index) {
        html += '<tr>';
        html += `<td>${index + 1} `;
        html += `<td>${item[0]}`;
        html += `<td>${item[1]} `;
        html += `<td>${item[2]} `;
        html += "<td><button type='button' onclick='deleteBtn()'> Delete</button><button type='button' onclick='editBtn()'> Edit</button>"

    })
    html += "</table>"
    document.getElementById("list-products").innerHTML = html;
}
displaylistProducts();

function deleteBtn(index) {
    if (confirm('are you sure ?')) {
        products.splice(index, 1)
        displaylistProducts();
    }
}
function clear(){
     document.getElementById('name').innerHTML = "";
     document.getElementById('Price').innerHTML = "";
     document.getElementById('quality').innerHTML = "";
}
function editBtn() {
    let name = document.getElementById('name').value;
    let Price = document.getElementById('Price').value;
    let sll = document.getElementById('quality').value;
    if (!name || !Price || !sll) {
        alert("No empty")
    }else {
        products.push(item);
        let item[name,Price,sll];
        clear();
    }
}