import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import './Home.css';

const categories = {
  Men: ['mens-shirts', 'mens-shoes', 'mens-watches'],
  Women: ['womens-dresses', 'womens-shoes', 'womens-watches', 'womens-bags', 'womens-jewellery'],
  Children: ['tops']
};


const Home = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState({ Men: '', Women: '', Children: '' });

  useEffect(() => {
    Object.entries(categories).forEach(([label, categoryArray]) => {
      const firstCategory = categoryArray[0];
      fetch(`https://dummyjson.com/products/category/${firstCategory}`)
        .then(res => res.json())
        .then(data => {
          const thumbnail = data.products[0]?.thumbnail || '';
          setImages(prev => ({ ...prev, [label]: thumbnail }));
        })
        .catch(err => console.error(`Failed to fetch ${label} image`, err));
    });
  }, []);

  const handleCategoryClick = (group) => {
    const selectedCategories = categories[group];
    navigate(`/products?categories=${selectedCategories.join(',')}`);
  };

  return (
    <Layout>
      <div className="home-hero-section">
        <div className="intro-section">
          <h1 className="main-heading">
            Discover <span className="brand-name">LushLuxe</span>
          </h1>
          <p className="subtext">
            Style your moments with confidence. From <strong>men’s</strong> classics to <strong>women’s</strong> elegance and <strong>kids’</strong> playful picks — we’ve got your look covered.
          </p>
          <button className="cta-main-btn" onClick={() => navigate('/products')}>
            🌿 Shop the Collection
          </button>
        </div>

        <div className="brands-container">
          {Object.entries(images).map(([label, imageUrl]) => (
            <div key={label} className="brand-card" onClick={() => handleCategoryClick(label)}>
              <div className="brand-image-wrapper">
                <img src={imageUrl} alt={`${label}`} className="brand-image" />
              </div>
              <div className="brand-label">{label}'s Picks</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
