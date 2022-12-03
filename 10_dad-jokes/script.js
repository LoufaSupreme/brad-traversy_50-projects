const jokeDiv = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', async () => {
    try {
        const res = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        const joke = await res.json();
        jokeDiv.innerText = joke.joke;
    }
    catch(err) {
        console.error(err);
    }
})
