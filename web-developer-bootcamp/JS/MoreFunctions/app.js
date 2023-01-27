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

function callTwice(func) {
    func();
    func();
}

function rollDice() {
    const roll = Math.floor(Math.random()*6)+1
    console.log(roll);
}