// import 
import { useState } from "react"



export const SingleCard = ({card, MakeChoice}) => {


const cardClickHandler = () => {
    MakeChoice(card)
    //flip the card
    



}

    return (
        <div className='Card' id={card.id}>
            <div>
                <img 
                id="frontOfCard"
                className='CardFront' 
                src={card.src} alt='Card Front' 
                style={{width: '100%', height: '100%' }} />

                <img 
                id="BackOfCard"
                className='CardBack' 
                src='/img/Card-back.png' 
                alt='Card back' 
                style={{width: '100%', height: '100%' }}
                onClick={cardClickHandler}
                />
            </div>
        </div>
    )
}