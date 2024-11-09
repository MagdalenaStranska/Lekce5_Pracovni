// const nadpis = document.querySelector("h1")
// // const nadpis2 = document.querySelectorAll("h1")

// nadpis.textContent = "Toto jsem zmenil pomoci JS"

// nadpis.style.color = "yellow"
// nadpis.style.backgroundColor = "red"

// nadpis.classList.add("ramecek")
// nadpis.classList.remove("ramecek")

// document.querySelector("#obrazek-kocka").src = "https://assets.marthastewart.com/styles/wmax-1500/d20/cat-kitten-138468381/cat-kitten-138468381_horiz.jpg"
// document.querySelector("#obrazek-kocka").style.width = "200px"
// document.querySelector("#obrazek-kocka").alt = "Krasna kocka"

const produkty = document.querySelector("#produkty")
const produkt = {
    nazev: "talir",
    cena: 100,
    mena: "CZK",
}

//const elBtn = priklad pojmenovani constanty


produkty.innerHTML = `
<h2 class="ramecek">${produkt.nazev}</h2>
<p>Cena: ${produkt.cena} ${produkt.mena}</p>
`

produkty.classList.add("trida5")
produkty.classList.remove("trida2")

if(produkty.classList.contains("trida6")) {
    produkty.classList.remove("trida6")
} else {
    produkty.classList.add("trida6")
}

produkty.classList.toggle("trida7")

//produkty.className = "trida666 trida777"