import React, { useState, useEffect } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [totalPrice, setTotalPrice] = useState(product?.price || 0);

  useEffect(() => {
    if (product) {
      setTotalPrice((product.price * quantity).toFixed(2));
    }
  }, [quantity, product]);

  if (!product) return null;

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value));
    setQuantity(value);
  };

  const handleAddToCart = () => {
    alert(`🛒 Added ${quantity} ${product.title}(s) in ${selectedColor || 'Default Color'} to cart!`);
    onClose();
  };

  return (
    <div className="product-modal-backdrop" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        <img src={product.thumbnail} alt={product.title} className="modal-image" />

        <h2>{product.title}</h2>
        <p className="brand">Brand: {product.brand}</p>
        <p className="description">{product.description}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Rating:</strong> {product.rating} ⭐</p>

        <div className="modal-inputs">
          <label>
            Choose Color:
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
              <option value="">Default</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Gold">Gold</option>
            </select>
          </label>

          <label>
            Quantity:
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </label>
        </div>

        <p className="price"><strong>Total Price:</strong> ${totalPrice}</p>

        {product.discountPercentage > 0 && (
          <p className="discount">🎉 {product.discountPercentage}% OFF</p>
        )}

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
