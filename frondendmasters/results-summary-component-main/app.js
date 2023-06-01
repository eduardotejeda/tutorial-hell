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
        <li><img src='${score.icon}'> ${score.category} ${score.score} / 100</li>
        `;
       

        placeholder.innerHTML = out;

    }


})