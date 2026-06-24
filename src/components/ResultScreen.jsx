function ResultScreen({ result, onHome }) {
    const won = result === 'win';
    return (
      <div className="hero-section">
        <div className="container h-100">
          <div className="d-flex flex-column justify-content-center align-items-center h-100 text-center">
            <h1 className="hero-title">{won ? 'YOU WIN!' : 'GAME OVER'}</h1>
            <button className="hero-btn mt-4" onClick={onHome}>
              HOME
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ResultScreen;