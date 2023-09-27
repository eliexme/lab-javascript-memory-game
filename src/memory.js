class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if(this.cards){
      const copyCards = [...this.cards]
    const shuffled = []
    for(let i=0; i<copyCards.length; i++){
      let randomIndex = Math.floor(Math.random() * copyCards.length)
      shuffled.push(copyCards[randomIndex])
      copyCards.splice(randomIndex, 1)
    }
    this.cards = shuffled
    }else return
    
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked ++
    if(card1 === card2){
      this.pairsGuessed ++
      return true
    }else{
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === this.cards.length/2){
      return true
    }else{
      return false
    }
  }
}
