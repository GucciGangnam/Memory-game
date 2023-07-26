// imports
import './App.css';
import { useState } from 'react';
import { SingleCard } from './components/singleCard';




// card images 

const cardImages = [ 
{src : '/img/ISO_C++_Logo.svg.png'}, 
{src : '/img/CSS-logo.png'},
{src : '/img/HTML-logo.png'},
{src : '/img/JavaScript-logo.png'},
{src : '/img/JSX-logo.png'},
{src : '/img/Python-logo.png'},
] 


function App() {

  // create states 
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

//   // card click handler
// const CardClickHandler = (CardID) => { 
//   console.log(CardID + " Clicked")
// }

// Create new card deck 

const createNewDeck = () => {
  //create 12 cards
  const newDeck = [...cardImages, ...cardImages]
  // shuffle the cards
    .sort(() => Math.random() - 0.5)
  // create id for each card
    .map((card) => ({...card, id: Math.random()}))
  // set the cards
  setCards(newDeck)
  setTurns(0)
} 

console.log(cards)
console.log(turns)

  return (

    <div className="App">

      <header className="App-header">
        Memory Game
      </header>

      <button className="New-Game-Button" onClick={createNewDeck}>
        New Game
      </button>

      <div className="Game-Board">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} />
        ))}

      </div>

    <div className="Score-Div">
      <div className="Score-Text">Current Score: 0</div>
      <div className="High-Score-Text">Lowest Score: 0</div>
    </div>


    </div>
  );
}

export default App;
