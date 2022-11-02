// Seleccionamos un elemento según el valor del atributo class
// console.log(document.querySelector('.testClass'));
// console.log(document.getElementsByClassName('testClass'));

// Seleccionamos un elemento según su nombre
// console.log(document.querySelectorAll('div'));
// console.log(document.getElementsByName('div'));

// Seleccionamos elementos segun el id
// console.log(document.querySelector('#img'));
// console.log(document.getElementById('img'));

const tree = [
    [
        ['1A'],
        [
            ['2A', '2B', '2C'],
            ['3A', '3B'],
            ['4A', ['5A', '5B'], '4B']
        ]
    ],
    [
        ['6A', '6B', '6C', '6D', '6E']
    ],
    ['7A', '7B']
];

let firstResult = tree[0];
let secondResult = firstResult[1];
let thirdResult = secondResult[2][1];
console.log(thirdResult[1]);
