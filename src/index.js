const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
let waiting = false
let cardsFlipped = []

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  const pairsTried = document.querySelector('#pairs-clicked')
  const pairsWin = document.querySelector('#pairs-guessed')

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      let cardName = card.getAttribute('data-card-name')
      cardsFlipped.push(cardName)
      if(waiting === false){
        card.classList.add('turned')
      }
      if(cardsFlipped.length === 2){
        waiting = true
        let isPair = memoryGame.checkIfPair(cardsFlipped[0], cardsFlipped[1])
        pairsTried.innerText = memoryGame.pairsClicked
        pairsWin.innerText = memoryGame.pairsGuessed

        if(!isPair){
          setTimeout(()=>{
            document.querySelectorAll('.card').forEach((card)=>{
              if(cardsFlipped.includes(card.getAttribute("data-card-name"))){
                card.classList.remove('turned')
              }
              waiting = false
            })
            cardsFlipped = []
            
          }, 1000)
        }else{
          cardsFlipped = []
          waiting = false
        }

        let finishGame = memoryGame.checkIfFinished()
        if(finishGame){
          alert('You won!!')
        }
      }

      console.log(`Card clicked: ${cardName}`);
    });
  });
});
