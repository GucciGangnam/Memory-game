// import css


export const SingleCard = ({card}) => {

    return (
        <div className='Card'>
            <div>
                <img className='CardFront' src={card.src} alt='Card Front' style={{ width: '100%', height: '100%' }} />
                <img className='CardBack' src='/img/Card-back.png' alt='Card back' style={{ width: '100px', height: '100px' }} />
            </div>
        </div>
    )
}