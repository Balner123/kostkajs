var hody = [];
var hody2 = [];
var select;
var cube;
var stat;

document.getElementById('addplayer').addEventListener('click', function() {
    var div = document.getElementById('druhy_hrac');
    div.style.display = 'block';
});

document.getElementById('player').addEventListener('click', function() {
    var div = document.getElementById('druhy_hrac');
    div.style.display = 'none';
    hody2.splice(0,hody2.length);
    document.getElementById('result2').innerHTML = '<p>Zde budou Výsledky</p>';

});
// 1: kostka
document.getElementById('reset').addEventListener('click', function(){
        hody.splice(0,hody.length);
        document.getElementById('result').innerHTML = '<p>Zde budou Výsledky</p>';

});
document.getElementById('game').addEventListener('click', function () {
    select = hody;cube = 'cube';stat = 'result';
    animace();

});
//---------------------->
//  2. kostka
document.getElementById('reset2').addEventListener('click', function(){
    hody2.splice(0,hody2.length);
    document.getElementById('result2').innerHTML = '<p>Zde budou Výsledky</p>';

});
document.getElementById('game2').addEventListener('click', function () {

    select = hody2;cube = 'cube2';stat = 'result2';
    animace();
});

//

function animace() {
    var el = 0;
    var h;

    for (let a = 1; a < 10; a++) {
        setTimeout(function() {
            hod();
            if (a === 9) {
                select.push(h);
                console.log(select);
                statistik(h);
            }
        }, el);

        el += 300;
    }

    function hod() {
        h = Math.ceil(Math.random() * 6);
        document.getElementById(cube).src = 'img/kostka' + h + '.png';
    }
}


function statistik(hj) {
    document.getElementById(stat).innerHTML = '<p>Hod: ' + hj + '</p>';
    document.getElementById(stat).innerHTML +=
        '<p>Počet hodů: ' + select.length + '</p>';
    document.getElementById(stat).innerHTML +=
        '<p>Součet hodů: ' + suma(select) + '</p>';
    document.getElementById(stat).innerHTML +=
        '<p>Průměr hodů: ' + average(suma(select), select.length) + '</p>';
    document.getElementById(stat).innerHTML +=
        '<p>Nejvyšší hod: ' + maximum(select) + '</p>';
    document.getElementById(stat).innerHTML +=
        '<p>Nejnižší hod: ' + minimum(select) + '</p>';
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


