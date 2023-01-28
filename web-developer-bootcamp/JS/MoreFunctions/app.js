//Lexical scope

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther'];
    function callForHelp() {
        for(let hero of heroes) {
            console.log(`Help us ${hero}`);
        }
    }
    callForHelp();
}

// Higher order functions
//Accept other functions as arguments
function callTwice(func) {
    func();
    func();
}

function rollDice() {
    const roll = Math.floor(Math.random()*6)+1
    console.log(roll);
}

//Return a fucntion

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

let isChild = makeBetweenFunc(0,18);
let isAduld = makeBetweenFunc(19,65);
let isSenior = makeBetweenFunc(66,120);

//Methods

const myMath = {
    sum: function (num1, num2) {
        return num1 + num2;
    },
    square (num) {
        return num * num;
    }
}

const hen = {
    name: "Helen",
    eggCount:0,
    layAnEgg() {
        this.eggCount++
        return "EGG"
    }
}