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
  const [secondChoice, setSecondChoice] = useState(null)




// Create new card deck 

const createNewDeck = () => {
  setCards([])
  setTurns(0)
  setfirstChoice(null)
  setSecondChoice(null)
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
  // if first card is trur and thecardID is = to first card ID then return
  if (firstChoice !== null && (theCard.id === firstChoice.id)) { 
    console.log('cant click same card twice')
    return
  }
  if (firstChoice === null) { 
    setfirstChoice(theCard)
  } else if (secondChoice === null) { 
    setSecondChoice(theCard)
  } else { 
    console.log('both choices already made')
  }


  // let chosenCard = document.getElementById(theCard.id)
  //   chosenCard.classList.add('Chosen')
};

useEffect(() => {
  if (firstChoice && secondChoice){
    runMatchChecker(); 
    //flip cards
  }
}, [firstChoice, secondChoice]);

// check if matches are legit 
const runMatchChecker = () => { 
  
    if (firstChoice.src === secondChoice.src) { 
      setCards(poopoo => { 
        return poopoo.map(card =>{ 
          if (card.src === firstChoice.src){ 
            return {...card, matched: true}
          } else { 
            return card
          }
        })
      })
      setTurns(turns + 1)
    } else { 

      setTurns(turns + 1)
    }

    setfirstChoice(null)
    setSecondChoice(null)
  
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
          />
        ))}
      </div>

    <div className="Score-Div">
      <div className="Score-Text">Current Score: {turns}</div>
      <div className="High-Score-Text">Lowest Score: 0</div>
    </div>


    </div>
  );
}

export default App;
