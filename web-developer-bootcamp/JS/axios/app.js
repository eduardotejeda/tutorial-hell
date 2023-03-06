// axios
// .get("https://icanhazdadjoke.com/api")
// .then((res) => {
//     console.log("Response: ", res);
// })
// .catch ((e) => {
//     console.log("Error! ", e);
// })

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
        const jokeText = await dadjoke();
        const newLI = document.createElement('LI');
        newLI.append(jokeText);
        jokes.append(newLI)
}

const dadjoke = async () => {
        try {
        const config = {headers: { Accept: 'application/json'}};
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
} catch (e) {
        return "NO JOKES AVAILABLE SORRY :("
}
    
};

button.addEventListener('click', addNewJoke)

