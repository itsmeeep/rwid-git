function main (text) {
    var first = text;
    var second = [];

    var array = text.toString().split("");

    for (var i = array.length - 1; i >= 0; i--) {
        second.push(array[i])
    }

    if (first == second.join('')) {
        console.log('betol')
    } else {
        console.log('salah')
    }
}

(() => {
    main("kodok");
})()