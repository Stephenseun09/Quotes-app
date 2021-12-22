const nextBtn = document.querySelector(".next");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const tweetBtn = document.querySelector(".twitter-share-button");


const generateRandomQuote = async () => {
    try {
        await fetch('https://type.fit/api/quotes')
            .then((response) => response.json())
            .then((arrayQuotes) => {
                const randomNumber = Math.floor(Math.random() * arrayQuotes.length)
                randomQuote = arrayQuotes[randomNumber]
                console.log(randomQuote)
                quote.innerHTML = '"' + randomQuote.text + '"'
                author.innerHTML = randomQuote.author
                tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote}-${author}`

                if (!randomQuote.author) {
                    author.innerHTML = `<em>Unknown</em>`
                }
            })
    } catch (e) {
        console.log(e)
    }

};
generateRandomQuote();
nextBtn.addEventListener('click', generateRandomQuote);
