var hody = [];
document.getElementById('reset').addEventListener('click', function(){
        hody.splice(0,hody.length);
        document.getElementById('result').innerHTML = '<p></p>';

});
document.getElementById('game').addEventListener('click', function () {
    animace();
});

function animace() {
    var el = 0;

    for (let a = 1; a < 10; a++) {
        setTimeout(function () {
            hod(a);
        }, el);
        el += 300;
    }

    function hod(a) {
        var h = Math.ceil(Math.random() * 6);
        document.getElementById('cube').src = 'img/kostka' + h + '.png';

        if (a === 9) {
            hody.push(h);
            console.log(hody);
            statistik(h);
        }
    }
}

function statistik(h) {
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Počet hodů: ' + hody.length + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Průměr hodů: ' + average(suma(hody), hody.length) + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Nejnižší hod: ' + minimum(hody) + '</p>';
}

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function (value, index) {
        sum += value;
    });
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function (value, index) {
        if (value > max) max = value;
    });
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function (value, index) {
        if (value < min) min = value;
    });
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}
