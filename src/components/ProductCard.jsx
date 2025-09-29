import '../styles/product.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      {/* Image wrapper with badge + overlay */}
      <div className="product-image">
        {product.bestSeller && (
          <span className="best-seller-badge">Best Seller</span>
        )}

        <img src={product.image} alt={product.name} />

        {/* Hover overlay button */}
        <div className="add-to-cart-overlay" onClick={() => addToCart(product)}>
          ADD TO CART
        </div>
      </div>

      {/* Product details */}
      <div className="product-details">
        {product.name1 && <h5 className="product-name">{product.name1}</h5>}
        {product.name2 && <h5 className="product-name">{product.name2}</h5>}
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
