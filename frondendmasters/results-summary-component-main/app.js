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
        <li><img src='${score.icon}'> <span id='category${scoreSum}' class='text'>${score.category} </span><span><b> ${score.score}</b> / 100</span></li>
        `;

        scoreSum += Math.floor(score.score/scores.length);      
       

        placeholder.innerHTML = out;
        scorePlaceHolcer.innerHTML = scoreSum

    }


})