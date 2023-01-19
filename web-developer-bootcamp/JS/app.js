if (1 + 1 === 2) {

console.log("Hello from our first file and if statement!")

}

let random = Math.random();
if (random < 0.5 ){
    console.log("Your number is less than 0.5!");
    console.log(random);
}

if (random >= 0.5) {
    console.log("Your number is greather than 0.5")
    console.log(random)
}

const dayOfWeek = prompt('Enter a day').toLowerCase();


if (dayOfWeek === 'monday') {
    console.log("Ughh need to change my mindset")
} else if (dayOfWeek === 'saturday') {
    console.log("Every days is cool")
} else if(dayOfWeek === 'friday') {
    console.log("Fridays are decents")
} else {
    console.log("Meh")
}