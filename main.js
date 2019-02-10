
"use strict"
/*
Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

Обрати внимание: функция не должна изменять переданный ей массив:

    var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var nX = 0;
var nArr = [];
function square(x) {
    for (var i = 0; i < x.length; i++) {
        nX = x[i] * x[i];
        nArr.push(nX);

    }arr.join(';');
    nArr.join(';');

    console.log(arr);
    console.log(nArr);
}
square(arr);





//Напишите функцию, которая выводит в HTML документ нумерованный список песен://


    var playList = [
        {
            author: "LED ZEPPELIN",
            song:"STAIRWAY TO HEAVEN"
        },
        {
            author: "QUEEN",
            song:"BOHEMIAN RHAPSODY"
        },
        {
            author: "LYNYRD SKYNYRD",
            song:"FREE BIRD"
        },
        {
            author: "DEEP PURPLE",
            song:"SMOKE ON THE WATER"
        },
        {
            author: "JIMI HENDRIX",
            song:"ALL ALONG THE WATCHTOWER"
        },
        {
            author: "AC/DC",
            song:"BACK IN BLACK"
        },
        {
            author: "QUEEN",
            song:"WE WILL ROCK YOU"
        },
        {
            author: "METALLICA",
            song:"ENTER SANDMAN"
        }
    ];

var testlist= document.getElementsByClassName( 'test-list');
for( var i = 0; i < playList.length; i++ ) {
    testlist[0].innerHTML += i +'. ' + playList[i].author + ' - ' + playList[i].song + '<br>';
}

