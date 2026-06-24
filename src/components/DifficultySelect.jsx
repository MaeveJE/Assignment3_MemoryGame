import { DIFFICULTIES } from '../data/difficulties';

function DifficultySelect({ onSelect }) {
  return (
    <div className="hero-section">
      <div className="container h-100">
        <div className="d-flex flex-column justify-content-center h-100 text-center">
          <h1 className="hero-title">CHOOSE<br />LEVEL</h1>
          <div className="d-flex flex-column align-items-center gap-3 mt-4">
            {Object.entries(DIFFICULTIES).map(([key, cfg]) => (
              <button
                key={key}
                className="hero-btn"
                onClick={() => onSelect(key)}
              >
                {cfg.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DifficultySelect;