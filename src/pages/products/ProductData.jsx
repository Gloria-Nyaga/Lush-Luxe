import React, { useState } from 'react';
import ProductModal from './ProductModal';

const ProductData = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imagesLoading, setImagesLoading] = useState(
    Object.fromEntries(products.map(p => [p.id, true]))
  );

  const handleImageLoad = (id) => {
    setImagesLoading(prev => ({ ...prev, [id]: false }));
  };

  return (
    <>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              {imagesLoading[product.id] && (
                <div className="image-spinner-overlay">
                  <div className="spinner small-spinner"></div>
                </div>
              )}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
                onLoad={() => handleImageLoad(product.id)}
                style={{ display: imagesLoading[product.id] ? 'none' : 'block' }}
              />
            </div>

            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <p className="product-brand">Brand: {product.brand}</p>
              <p className="product-description">{product.description}</p>

              <div className="product-meta">
                <p>Category: {product.category}</p>
                <p>Rating: {product.rating} ⭐</p>
                <p>Stock: {product.stock} units</p>
                {product.discountPercentage > 0 && (
                  <span className="discount-badge">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>

              <button
                className="order-button"
                onClick={() => setSelectedProduct(product)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductData;
