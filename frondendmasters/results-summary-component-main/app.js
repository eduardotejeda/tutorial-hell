fetch("data.json")
.then(function(response){
    return response.json()
})
.then(function(scores){
    console.log(scores)
    let placeholder = document.querySelector("#data-output");
    let out = "";

    for(let score of scores){
        out += `
        <ul>
        <li><img src='${score.icon}'></li>
        <li>${score.category}</li>
        <li>${score.score}</li>
        </ul>
        `;
       

        placeholder.innerHTML = out;

    }


})