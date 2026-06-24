function Card({ card, onClick }) {
    const showFace = card.isFlipped || card.isMatched;
  
    return (
      <div className="card-tile" onClick={onClick}>
        <div className={`card-inner ${showFace ? 'is-flipped' : ''}`}>
          <div className="card-front" />
          <div className="card-back">
            <img src={card.img} alt="" draggable={false} />
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;