let url = "https://api.quotable.io/random"
const quote = document.querySelector("#quote")
const author = document.querySelector("#author")
const loading= document.getElementsByClassName("animated-background")
const heading= document.getElementById("heading")
const btn = document.querySelector("button")


const getQuote = async() => {
    let get = await fetch(url)
    let data = await get.json()

    quote.innerHTML = data.content
    author.innerHTML = data.author
    for(let i = 0; i < loading.length; i++)
    {
        loading[i].classList.add("hide")
    }
    author.classList.remove("hide")
    heading.classList.remove("hide")
    btn.classList.remove("hide")
}

btn.addEventListener("click", async() => {
    loading[1].classList.remove("hide")
    quote.classList.add("hide")

    loading[2].classList.remove("hide")
    author.classList.add("hide")

    let get = await fetch(url)
    let data = await get.json()
    quote.innerHTML = data.content
    author.innerHTML = data.author

    for(let i = 0; i < loading.length; i++)
    {
        loading[i].classList.add("hide")
    }

    quote.classList.remove("hide");
    author.classList.remove("hide");



    
})

getQuote()