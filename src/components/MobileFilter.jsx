import '../styles/sidebar.css';

const MobileFilter = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-filter-overlay">
      <button onClick={onClose} aria-label="Close Filters">
        Close
      </button>
      <div className="sidebar">
        <h4 className="filter-title">Mobile Filters</h4>
        <ul className="filter-options">
          <li className="filter-option">
            <input type="checkbox" id="pets-mobile" />
            <label htmlFor="pets-mobile">Pets</label>
          </li>
          <li className="filter-option">
            <input type="checkbox" id="architecture-mobile" />
            <label htmlFor="architecture-mobile">Architecture</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileFilter;
