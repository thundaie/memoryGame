const moodBoard =[
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
    
]

moodBoard.sort(() => 0.5 - Math.random())

const result = document.getElementById("result")
const gridDisplay = document.getElementById("grid")
let cardClicked = []
let cardClickedId = []
let cardWon = []



function createBoard() {
    for(let i = 0; i < moodBoard.length; i++){
        const card = document.createElement('img')
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.append(card)
    }
}
createBoard()

function flipCard() {
    const cardId = this.getAttribute("data-id")
    const userClick = moodBoard[cardId].name
    const userImage = moodBoard[cardId].img
    cardClickedId.push(cardId)
    cardClicked.push(userClick)
    this.setAttribute("src", userImage)

    if(cardClicked.length === 2){
        setTimeout(compareCards, 500)
    }
}

function compareCards() {
    const cards = document.querySelectorAll("img")

    if(cardClickedId[0] == cardClickedId[1]){
        alert("You clicked the same card!")
        cards[cardClickedId[0]].setAttribute("src", "images/blank.png")
        cards[cardClickedId[1]].setAttribute("src", "images/blank.png")
    }

    if(cardClicked[0] === cardClicked[1] && cardClickedId[0] != cardClickedId[1]){
        alert("We have a match")
        cards[cardClickedId[0]].setAttribute("src", "images/white.png")
        cards[cardClickedId[1]].setAttribute("src", "images/white.png")
        cards[cardClickedId[0]].removeEventListener("click", flipCard)
        cards[cardClickedId[1]].removeEventListener("click", flipCard)
        cardWon.push(cardClicked)
    }
    else {
        alert("Sorry, Try again later")
        cards[cardClickedId[0]].setAttribute("src", "images/blank.png")
        cards[cardClickedId[1]].setAttribute("src", "images/blank.png")
    }

    result.innerHTML = cardWon.length
    cardClicked = []
    cardClickedId = []

    

    if(cardWon.length === moodBoard.length/2){
        result.innerHTML = "Congrats you've found all possible combinations"
    }
} 



