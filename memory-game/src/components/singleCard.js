// import 
import { useState } from "react"



export const SingleCard = ({card, MakeChoice, flipped}) => {


const cardClickHandler = () => {
    MakeChoice(card)
}

    return (
        <div className='Card' id={card.id}>
            <div className={flipped ? 'flipped' : ''}>
                <img 
                id="frontOfCard"
                className='CardFront' 
                src={card.src} alt='Card Front' 
                />

                <img 
                id="BackOfCard"
                className='CardBack' 
                src='/img/Card-back.png' 
                alt='Card back' 
                onClick={cardClickHandler}
                />
            </div>
        </div>
    )
}