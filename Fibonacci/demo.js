
function add(mang){
    let n = +prompt('nhập n:')
    let n1 = 0, n2 = 1, temp;
    for (let i = 1; i <= n; i++) {
        // if(n1 % 5 == 0){
            document.write(+n1+',')
        //     break;
        // }

        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
        // T= T+ n1

    }
}
console.log(Array(mang))