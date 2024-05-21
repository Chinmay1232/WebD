let url = "https://api.quotable.io/random"
const quote = document.querySelector("#quote")
const author = document.querySelector("#author")
const loading= document.getElementsByClassName("animated-background")
const heading= document.getElementById("heading")


const getQuote = async() => {
    let get = await fetch(url)
    let data = await get.json()

    quote.innerHTML = data.content
    author.innerHTML = data.author
    for(let i = 0; i < loading.length; i++)
    {
        loading[i].classList.add("hide")
    }
    heading.classList.remove("hide")
}

getQuote()