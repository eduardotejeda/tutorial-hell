fetch("data.json")
.then(function(response){
    return response.json()
})
.then(function(scores){
    console.log(scores)

    let placeholder = document.querySelector("#data-output");
    let scorePlaceHolcer = document.querySelector('#scoreSum')
    let out = "";
    let scoreSum = 0;

    for(let score of scores){
        out += `
        <li><img src='${score.icon}'> ${score.category} ${score.score} / 100</li>
        `;

        scoreSum += Math.floor(score.score/scores.length);      
       

        placeholder.innerHTML = out;
        scorePlaceHolcer.innerHTML = scoreSum

    }


})