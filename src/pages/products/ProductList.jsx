import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductData from './ProductData';
import './Products.css';


const ProductList = () => {
  const [groupedProducts, setGroupedProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const singleCategory = queryParams.get('category');
  const multiCategoryParam = queryParams.get('categories'); // e.g. ?categories=mens-shirts,mens-shoes

  const categoryGroups = {
    Men: ['mens-shirts', 'mens-shoes', 'mens-watches'],
    Women: ['womens-dresses', 'womens-shoes', 'womens-watches', 'womens-bags', 'womens-jewellery'],
    Children: ['tops']
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let fetchTargets = {};

        if (multiCategoryParam) {
          const selected = multiCategoryParam.split(',');
          for (const category of selected) {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            fetchTargets[category] = data.products;
          }
        } else if (singleCategory) {
          const res = await fetch(`https://dummyjson.com/products/category/${singleCategory}`);
          const data = await res.json();
          fetchTargets[singleCategory] = data.products;
        } else {
          for (const [group, categories] of Object.entries(categoryGroups)) {
            const products = [];
            for (const category of categories) {
              const res = await fetch(`https://dummyjson.com/products/category/${category}`);
              const data = await res.json();
              products.push(...data.products);
            }
            fetchTargets[group] = products;
          }
        }

        setGroupedProducts(fetchTargets);
      } catch (err) {
        setError('Failed to fetch products.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {Object.entries(groupedProducts).map(([label, products]) => (
        <div key={label} style={{ marginBottom: '3rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
            {label.replace(/-/g, ' ').toUpperCase()}
          </h2>
          <ProductData products={products} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
