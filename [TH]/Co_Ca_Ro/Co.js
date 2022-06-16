let b = document.getElementById('caro');
let array = [];
let data = "";
for (let i = 0; i < 5; i++) {
    array[i] = new Array(" (.)"," (.)"," (.)"," (.)"," (.)");
    data += '<br>'
    for (let j = 0; j < 5; j++) {
        data += array[i][j];
    }
}
document.write(data)
function changeValue(){
    let positionX = prompt('X :');
    let positionY = prompt('Y :');
    let h = 1;
    data = "";
    if(h % 2 == 0){
        array[positionX][positionY] = 'x';
    }else {
        array[positionX][positionY] = 'o';
    }
    h++;
    // array[positionX][positionY] = '&nbspx&nbsp';
    for(let i = 0; i < 5;i++){
        data += '<br>';
        for(let j = 0;j < 5;j++){
            data += array[i][j] + '&ensp;' + '&ensp;' + '&ensp;';
        }
    }
    b.innerHTML = data;
    data += b.innerHTML = "<hr/>" + data;
}
