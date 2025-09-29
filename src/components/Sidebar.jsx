import '../styles/sidebar.css';
import { useState } from 'react';

const Sidebar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  return (
    <aside className="sidebar">
      <div className="breadcrumb">Photography / Premium Photos</div>

      {/* Categories Section */}
      <div className="filter-section">
        <h4
          className="filter-title"
          onClick={() => setCategoriesOpen(!categoriesOpen)}
        >
          Categories
        </h4>
        {categoriesOpen && (
          <ul className="filter-options">
            <li className="filter-option">
              <input type="checkbox" id="people" />
              <label htmlFor="people">People</label>
            </li>
            <li className="filter-option">
              <input type="checkbox" id="premium" />
              <label htmlFor="premium">Premium</label>
            </li>
            <li className="filter-option">
              <input type="checkbox" id="pets" defaultChecked />
              <label htmlFor="pets">Pets</label>
            </li>
            <li className="filter-option">
              <input type="checkbox" id="food" defaultChecked />
              <label htmlFor="food">Food</label>
            </li>
            <li className="filter-option">
              <input type="checkbox" id="landmarks" defaultChecked />
              <label htmlFor="landmarks">Landmarks</label>
            </li>
            <li className="filter-option">
              <input type="checkbox" id="cities" />
              <label htmlFor="cities">Cities</label>
            </li>
            <li className="filter-option">
              <input type="checkbox" id="nature" />
              <label htmlFor="nature">Nature</label>
            </li>
          </ul>
        )}
      </div>

      {/* Price Range Section */}
      <div className="filter-section">
        <h4 className="filter-title" onClick={() => setPriceOpen(!priceOpen)}>
          Price Range
        </h4>
        {priceOpen && (
          <ul className="filter-options">
            <li className="filter-option">
              <input type="checkbox" id="under-100" />
              <label htmlFor="under-100">Lower than $100</label>
            </li>
            <li className="filter-option">
              <input type="checkbox" id="20-100" />
              <label htmlFor="20-100">$20 - $100</label>
            </li>
            <li className="filter-option">
              <input type="checkbox" id="100-200" />
              <label htmlFor="100-200">$100 - $200</label>
            </li>
            <li className="filter-option">
              <input type="checkbox" id="over-200" />
              <label htmlFor="over-200">More than $200</label>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
