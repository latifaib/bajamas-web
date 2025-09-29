import { useState } from 'react';
import Header from '../Header';
import ProductGrid from '../ProductGrid';
import Sidebar from '../Sidebar';
import SortDropdown from '../SortDropdown';
import MobileFilter from '../MobileFilter';
import Pagination from '../Pagination';

import dogRestingImg from '../../assets/images/DogResting.png';
import yellowImage from '../../assets/images/YellowImage10.png';
import windowImage from '../../assets/images/windowImage10.1.png';
import eggImage from '../../assets/images/EggImage10.2.png';

import '../../styles/global.css';
import '../../styles/header.css';
import '../../styles/product.css';
import '../../styles/sidebar.css';

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      // prevent duplicates
      if (prev.find((item) => item.name === product.name)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header cartItems={cartItems} removeFromCart={removeFromCart} />
      <section className="header-name">
        <h2 className="header-title">Samurai King Resting</h2>
        <button
          className="btn add-cart header-cart-overlay"
          onClick={() =>
            addToCart({ name: 'Samurai King Resting', price: 29.99 })
          }
        >
          ADD TO CART
        </button>
      </section>
      <div className="Dog-Resting">
        <img src={dogRestingImg} alt="Dog Resting" />
      </div>

      <section className="product-description">
        <div className="product-info">
          <h4>About the Samurai King Resting</h4>
          <h3>Pets</h3>
          <p>
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrammed part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book. So how did the classical
            latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrammed part of Cicero's De Finibus in order to
            provide placeholder text to mockup various fonts for a type specimen
            book. SO how did the classical latin become so incoherent? According
            to McClintock.
          </p>
        </div>

        <div className="additional-info">
          <h4>People also buy</h4>
          <div className="images">
            <img src={yellowImage} alt="" />
            <img src={windowImage} alt="" />
            <img src={eggImage} alt="" />
          </div>
          <h4>Details</h4>
          <h5>Size 1020 x 1020 pixel</h5>
          <h5>Size 15 mb</h5>
        </div>
      </section>

      <main className="main-content">
        <Sidebar />
        <div className="products-section">
          <button
            className="filter-toggle-btn"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            Filter
          </button>
          <SortDropdown />
          <ProductGrid addToCart={addToCart} />
          <Pagination />
        </div>
      </main>

      <MobileFilter
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
      />
    </div>
  );
};

export default ProductPage;
