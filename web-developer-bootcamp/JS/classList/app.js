const li = document.querySelectorAll('ul li');

//li.classList.toggle('highlight')

console.log("I'm here")

for (hello of li) {
    if (hello.classList.contains("highlight") === true) {
        hello.classList.remove("highlight")
    } else {
        hello.classList.add("highlight")
    }
    //hello.classList.toggle('highlight')
}