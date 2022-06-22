let main = new Rectangle(20, 60);

function createCircle() {
    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 5, main.getheight(), main.getwidth());
    ctx.stroke();
}
main.setwidth(200);
main.getwidth();
main.setheight(100);
main.getheight();
document.write(`chu vi là : ${main.ChuVi()} , Diện tích là : ${main.DienTich()}`)
createCircle();

