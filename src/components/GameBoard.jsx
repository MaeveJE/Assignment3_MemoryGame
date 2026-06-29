import { useState, useEffect, useMemo, useRef } from 'react';
import { DIFFICULTIES, ALL_IMAGES } from '../data/difficulties';
import Card from './Card';



function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function GameBoard({ difficulty, onGameOver }) {
  const config = DIFFICULTIES[difficulty];

  const totalCards = config.pairs * 2;
    const rows = Math.ceil(totalCards / config.cols);

  const cards = useMemo(() => {
    const chosen = ALL_IMAGES.slice(0, config.pairs);
    const deck = [...chosen, ...chosen].map((img, i) => ({
      id: i,
      img,
      isFlipped: false,
      isMatched: false,
    }));
    return shuffle(deck);
  }, [config.pairs]);

  const [deck, setDeck] = useState(cards);
  const [flippedIds, setFlippedIds] = useState([]);
  const [timeLeft, setTimeLeft] = useState(config.timeLimit);
  const lockRef = useRef(false); 


  useEffect(() => {
    if (timeLeft <= 0) {
      onGameOver('lose');
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, onGameOver]);


  useEffect(() => {
    if (deck.length > 0 && deck.every((c) => c.isMatched)) {
      onGameOver('win');
    }
  }, [deck, onGameOver]);

  const handleCardClick = (id) => {
    if (lockRef.current) return;
    const card = deck.find((c) => c.id === id);
    if (!card || card.isFlipped || card.isMatched) return;

    const newFlippedIds = [...flippedIds, id];
    setDeck((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c))
    );

    if (newFlippedIds.length === 2) {
      lockRef.current = true;
      const [firstId, secondId] = newFlippedIds;
      const first = deck.find((c) => c.id === firstId);
      const second = card;

      if (first.img === second.img) {
        setDeck((prev) =>
          prev.map((c) =>
            c.id === firstId || c.id === secondId
              ? { ...c, isMatched: true }
              : c
          )
        );
        setFlippedIds([]);
        lockRef.current = false;
      } else {
        setTimeout(() => {
          setDeck((prev) =>
            prev.map((c) =>
              c.id === firstId || c.id === secondId
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedIds([]);
          lockRef.current = false;
        }, 800);
      }
    } else {
      setFlippedIds(newFlippedIds);
    }
  };

  return (
    <div className="hero-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="hero-title" style={{ fontSize: '2rem' }}>
            {config.label}
          </h2>
          <div className="timer-badge">⏱ {timeLeft}s</div>
        </div>
        <div
          className="card-grid"
          style={{
            gridTemplateColumns: `repeat(${config.cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {deck.map((card) => (
            <Card key={card.id} card={card} onClick={() => handleCardClick(card.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameBoard;