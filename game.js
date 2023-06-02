const cardsArray=[
    {
        name:"horse",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVDu5BYHYZGRLEh3M3RYfv0J1gEjxqYqKAb4YGZFjuG7U9njRXLGr5KOI7NqNmfpKFtg&usqp=CAU'
    },
    {
        name:"dog",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCMGHi_X_CUCmVdYDGAlaxidatAGExLgpzg&usqp=CAU'
    },
    {
        name:"duck",
        icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyHE8LvrGrKObXYNDI0n1CxRUFU8vEMiCrQ&usqp=CAU"
    },
    {
        name:"cat",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmVLcGH-pTcuAsafdtha1qSi9IR4O8Z8mbE-1IU31c_w3-4AAq1WIZJQNjcp46EG_sHU&usqp=CAU'
    },
    {
        name:"monkey",
        icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAi9NCqPmoeyVwzg7tW-X5FV6UNER6rCuDLv4AkT7bbvGqXAnZ2BgdKomwQrPTgQM2U9A&usqp=CAU"
    },
    {
        name:"dolphin",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydaJQv3rORBgLzkW21UzGs9ZnqfCIYfItwg&usqp=CAU'
    },
    {
        name:"rabbit",
        icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnFPr-F3qS_sMHejo1AzpQM2woah0Tb6w20V38dW0C7kCmejYNsbqHX1y6fHtjXHYTtA&usqp=CAU"
    },
    {
        name:"birds",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtpXT4Up3Ev2jraUPFZb-2UoVmWrkffDVrA&usqp=CAU'
    },
    {
        name:"horse",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVDu5BYHYZGRLEh3M3RYfv0J1gEjxqYqKAb4YGZFjuG7U9njRXLGr5KOI7NqNmfpKFtg&usqp=CAU'
    },
    {
        name:"dog",
        icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCMGHi_X_CUCmVdYDGAlaxidatAGExLgpzg&usqp=CAU"
    },
    {
        name:"duck",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyHE8LvrGrKObXYNDI0n1CxRUFU8vEMiCrQ&usqp=CAU'
    },
    {
        name:"cat",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmVLcGH-pTcuAsafdtha1qSi9IR4O8Z8mbE-1IU31c_w3-4AAq1WIZJQNjcp46EG_sHU&usqp=CAU'
    },
    {
        name:"monkey",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAi9NCqPmoeyVwzg7tW-X5FV6UNER6rCuDLv4AkT7bbvGqXAnZ2BgdKomwQrPTgQM2U9A&usqp=CAU'
    },
    {
        name:"dolphin",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydaJQv3rORBgLzkW21UzGs9ZnqfCIYfItwg&usqp=CAU'
    },
    {
        name:"rabbit",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnFPr-F3qS_sMHejo1AzpQM2woah0Tb6w20V38dW0C7kCmejYNsbqHX1y6fHtjXHYTtA&usqp=CAU'
    },
    {
        name:"birds",
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtpXT4Up3Ev2jraUPFZb-2UoVmWrkffDVrA&usqp=CAU'
    }

];
let flippedCards=[]
let matchedPairs = 0;
shuffleCards();
const gameBoard = document.getElementById("gameBoard")
displayCards();

// console.log(cardsArray)
function shuffleCards(){
    for(i=cardsArray.length-1;i>=0;i--){
        const randIndex=Math.floor(Math.random() * ( i + 1 ));
       [cardsArray[i],cardsArray[randIndex]] = [cardsArray[randIndex],cardsArray[i]] 
    }
}

 function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card= document.createElement("div");
        card.setAttribute("id",index);
        card.classList.add("cardback");
        card.classList.add("active")
        gameBoard.append(card);
        card.addEventListener("click",flipCard);

    })
    console.log(cardsArray)
}

function flipCard(){
    if( flippedCards.length < 2 && this.classList.contains("active")){
    let cardId = this.getAttribute("id");
    // console.log(cardId)
    flippedCards.push(this);
    console.log(flippedCards);
    this.classList.remove("cardback");
    // let image = document.createComment('img')
    this.innerHTML = `<img src=${cardsArray[cardId].icon}/>`}
    if(flippedCards.length == 2){
       setTimeout(checkMatch,1000);
    }
}
function checkMatch(){
    const card1Id = flippedCards[0].getAttribute("id")
    const card2Id = flippedCards[1].getAttribute("id")
    if (cardsArray[card1Id].name === cardsArray[card2Id].name){
        flippedCards[0].style.border = "none";
        flippedCards[0].style.backgroundColor = "transparent";
        flippedCards[0].innerHTML = '';
        flippedCards[0].classList.remove("active");
        flippedCards[1].classList.remove("active");
        flippedCards[1].style.border = "none";
        flippedCards[1].style.backgroundColor = "transparent";
        flippedCards[1].innerHTML = '';
        matchedPairs++
        checkGameOver();
    }
    else{
        flippedCards[0].innerHTML = "";
        flippedCards[0].classList.add("cardback");
        flippedCards[1].innerHTML = "";
        flippedCards[1].classList.add("cardback");
    }
    flippedCards = [];
}

function checkGameOver(){
    if(matchedPairs==cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = " YOU WON ";
        gameBoard.classList.remove("game");
        gameBoard.classList.add("won");
    }
}