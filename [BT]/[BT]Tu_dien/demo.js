function dich() {
    let array1 = ['monky', 'panda', 'cat', 'dog'];
    let array2 = ['khỉ', 'gấu', 'mèo', 'chó'];
    let b = document.getElementById('a').value;
    for (let i = 0; i < array1.length; i++) {
        if (b !== array1[i]) {
            document.getElementById('in').innerHTML = 'không tim thấy';

        } else {
            document.getElementById('in').innerHTML = array2[i];
            break;
        }
    }

}