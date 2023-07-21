function factorial(number) {
    var nilai = (number <= 0) ? 1 : number;
    for (var i = 1; i < number; i++) {
        nilai = nilai * (number-i)
    }

    console.log(nilai)
}

(() => {
    factorial(10);
})()