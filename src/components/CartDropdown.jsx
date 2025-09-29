import '../styles/header.css'; // contains .cart-dropdown styles

const CartDropdown = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-dropdown">
      <h3>Your Cart</h3>
      <ul>
        {cartItems.length === 0 ? (
          <li className="empty-cart">Your cart is empty</li>
        ) : (
          cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item-info">
                {item.image && <img src={item.image} alt={item.name} />}
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">${item.price}</div>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                ×
              </button>
            </li>
          ))
        )}
      </ul>
      {cartItems.length > 0 && (
        <button className="checkout-btn">Checkout</button>
      )}
    </div>
  );
};

export default CartDropdown;
