
let url = "https://api.quotable.io/random"
const quote = document.querySelector("p")
const btn = document.querySelector("button")

let text = ""
const getQuote = async() => {
    let data = await fetch(url)
    let respose = await data.json()
    text = respose.content;
    quote.innerHTML = text
}


getQuote()
btn.addEventListener("click",getQuote)

