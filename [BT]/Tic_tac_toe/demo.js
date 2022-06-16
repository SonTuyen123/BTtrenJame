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
var h = 1;
function changeValue(){
    let positionX = prompt('X :');
    let positionY = prompt('Y :');

    data = "";
    if(h % 2 == 0){
        array[positionX][positionY] = 'X';
    }else {
        array[positionX][positionY] = '0';
    }
    h++;
    // array[positionX][positionY] = '&nbspx&nbsp';
    for(let i = 0; i < 5;i++){
        data += '<br>';
        for(let j = 0;j < 5;j++){
            data += array[i][j] + '&ensp;';
        }
    }

    data += b.innerHTML = "<hr/>" + data;
    checkwiin()
}
function checkwiin(){
    for(let i = 0; i < array.length;i++){
        for(let j = 0; j < array.length;j++){
            if(array[i][j] === 'X' && array[i][j+1] === 'X' && array[i][j+2] === 'X'||
             array[i][j] === 'X' && array[i+1][j] === 'X' && array[i+2][j] === 'X')
            {
                alert('X tháng')
            }else if(array[i][j] === '0' && array[i][j+1] === '0' && array[i][j+2] === '0'||
                array[i][j] === '0' && array[i+1][j] === '0' && array[i+2][j] === '0'){
                alert('0 tháng')
            }
        }
    }
}
