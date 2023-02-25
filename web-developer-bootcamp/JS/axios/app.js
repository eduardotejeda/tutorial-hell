// axios
// .get("https://icanhazdadjoke.com/api")
// .then((res) => {
//     console.log("Response: ", res);
// })
// .catch ((e) => {
//     console.log("Error! ", e);
// })

const dadjoke = async () => {
        const config = {headers: { Accept: 'application/json'}};
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        console.log(res.data.joke);
    
};

