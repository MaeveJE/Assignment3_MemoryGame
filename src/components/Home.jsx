function Home({ onPlay }) {
    return (
      <div className="hero-section">
        <div className="container h-100">
          <div className="d-flex flex-column justify-content-center h-100">
            <h1 className="hero-title">GARDEN<br />MATCH</h1>
            <button className="hero-btn mt-4" onClick={onPlay}>PLAY</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;