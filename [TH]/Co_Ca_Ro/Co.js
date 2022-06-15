let b = document.getElementById('caro');
let array = [];
let data = "";
for (let i = 0; i < 5; i++) {
    array[i] = new Array("o","o","o","o","o");
    data += '<br>'
    for (let j = 0; j < 5; j++) {
        data += array[i][j];
    }
}
document.write(data)
function changeValue(){
    let positionX = prompt('X :');
    let positionY = prompt('Y :');
    data = "";
    array[positionX][positionY] = 'x';
    for(let i = 0; i < 5;i++){
        data += '<br>';
        for(let j = 0;j < 5;j++){
            data += array[i][j]
        }
    }
    data += b.innerHTML = "<hr/>" + data;
}
