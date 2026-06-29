import { useState } from 'react';
import Home from './components/Home';
import DifficultySelect from './components/DifficultySelect';
import GameBoard from './components/GameBoard';
import ResultScreen from './components/ResultScreen';
import './index.css';

function App() {
  const [screen, setScreen] = useState('home'); 
  const [difficulty, setDifficulty] = useState(null);
  const [result, setResult] = useState(null); 

  const goHome = () => {
    setScreen('home');
    setDifficulty(null);
    setResult(null);
  };

  if (screen === 'home') {
    return <Home onPlay={() => setScreen('difficulty')} />;
  }

  if (screen === 'difficulty') {
    return (
      <DifficultySelect
        onSelect={(level) => {
          setDifficulty(level);
          setScreen('game');
        }}
      />
    );
  }

  if (screen === 'game') {
    return (
      <GameBoard
        difficulty={difficulty}
        onGameOver={(outcome) => {
          setResult(outcome);
          setScreen('result');
        }}
      />
    );
  }

  if (screen === 'result') {
    return <ResultScreen result={result} onHome={goHome} />;
  }

  return null;
}

export default App;