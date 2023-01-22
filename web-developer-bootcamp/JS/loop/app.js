console.log('For loop normal')
const animals = ['lions', 'goats', 'dogs', 'cats', 'pigeons']

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

console.log('For loop inverso')
// Loop inverso

for (let j = animals.length - 1; j >= 0; j--) {
    console.log(j, animals[j])
}

console.log('Nested for loops')
//For loops anidados / nested

for (let index = 0; index < 10; index++) {
    console.log(index);
    for (let j = 1; j < 4; j++) {
        console.log(`     ${j}`);
        
    }

}

//For loops anidados / nested de arreglos

const people = [
    ['Luis','Francisco'],
    ['Miguel','Juan','Carlos'],
    ['Teresa','Fior']
]

console.log('Nested loops with strings')

for(index = 0; index < people.length; index++) {
   const peoples = people[index];
//    console.log(peoples)
for(let j = 0; j < peoples.length; j++) {
    console.log(peoples[j])
}

    
}