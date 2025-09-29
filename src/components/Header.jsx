import { useState, useEffect, useRef } from 'react';
import CartDropdown from './CartDropdown';
import '../styles/header.css';
import cartIcon from '../assets/images/CartImage3.1.svg';

const Header = ({ cartItems, removeFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="logo">BEJAMAS_</div>
      <div
        className="cart"
        ref={cartRef}
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <img src={cartIcon} alt="Cart" />
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
        {isCartOpen && (
          <CartDropdown cartItems={cartItems} removeFromCart={removeFromCart} />
        )}
      </div>
    </header>
  );
};

export default Header;
