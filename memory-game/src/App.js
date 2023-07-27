// imports
import './App.css';
import { useState, useEffect } from 'react';
import { SingleCard } from './components/singleCard';





// card images 

const cardImages = [ 
{src : '/img/ISO_C++_Logo.svg.png', matched: false}, 
{src : '/img/CSS-logo.png', matched: false},
{src : '/img/HTML-logo.png', matched: false},
{src : '/img/JavaScript-logo.png', matched: false},
{src : '/img/JSX-logo.png', matched: false},
{src : '/img/Python-logo.png', matched: false},
]

function App() {

  // create states 
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [firstChoice, setfirstChoice] = useState(null)
  const [secondChoice, setsecondChoice] = useState(null)
  const [lowestScore, setlowestScore] = useState('No record set')




// Create new card deck 

const createNewDeck = () => {
  setCards([])
  setTurns(0)
  setfirstChoice(null)
  setsecondChoice(null)
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

const MakeChoice = (theCard) => { 
  // if first card is trur and thecardID is = to first card ID then retur
  if (firstChoice !== null && (theCard.id === firstChoice.id)) { 
    console.log('cant click same card twice')
    return
  }
  if (firstChoice === null) { 
    setfirstChoice(theCard)
  } else if (secondChoice === null) { 
    setsecondChoice(theCard)
  } else { 
    console.log('both choices already made')
  }


  // let chosenCard = document.getElementById(theCard.id)
  //   chosenCard.classList.add('Chosen')
};

  useEffect(() => {
    if (firstChoice && secondChoice) {
      runMatchChecker();
    }
  }, [firstChoice, secondChoice]);

// check if matches are legit 
  const runMatchChecker = () => {
    if (firstChoice.src === secondChoice.src) {
      setCards(poopoo => {
        return poopoo.map(card => {
          if (card.src === firstChoice.src) {
            return { ...card, matched: true }
          } else {
            return card
          }
        })
      })
      setTurns(turns + 1)
    } else {
      setTurns(turns + 1)
    }
    setTimeout(() => setfirstChoice(null), 500)
    setTimeout(() => setsecondChoice(null), 500)
  }

  useEffect(() => {
    // Check if all 'matched' properties are true, but also check if 'cards' is not empty and is an array
    const allMatchesAreFound = Array.isArray(cards) && cards.length > 0 && cards.every(card => card.matched === true);
  
    // Log the current 'cards' array
    console.log(cards);
  
    // If all matches are found, log the message 'gameOver - all matches found!'
    if (allMatchesAreFound) { 
      updateLowestScore()
    }
  }, [cards, setCards]);
  
  const updateLowestScore = () => { 
    if (lowestScore === 'No record set'){ 
      setlowestScore(turns)
    }
    if (turns < lowestScore) { 
      setlowestScore(turns)
    }


  }


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
          <SingleCard 
          card={card} 
          key={card.id}  
          MakeChoice={MakeChoice}
          flipped={card === firstChoice || card === secondChoice || card.matched}
          />
        ))}
      </div>

    <div className="Score-Div">
      <div className="Score-Text">Current Score: {turns}</div>
      <div className="High-Score-Text">Lowest Score: {lowestScore}</div>
    </div>


    </div>
  );
}

export default App;
