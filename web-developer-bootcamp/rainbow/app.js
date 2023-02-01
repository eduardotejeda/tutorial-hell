const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const spans = document.querySelectorAll('h1 span')

for(let i = 0; i < spans.length; i++) {
    spans[i].style.color = colors[i]
    }

// spans[0].style.color = colors[0]

console.log("I'm here")
//console.log(spans)

// for (let span of spans) {
//     console.log(span)
// }



//spans.forEach(function(span, i){
  //set the color to the element using index i
 //span.style.color = colors[i];
//});
