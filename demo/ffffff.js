function func1(a) {
    if (a == 2)
        return 2;
    return a * func1(a - 1);
}

console.log(func1(5));