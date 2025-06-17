import './About.css';
import AboutImage from '../../assets/lush-banner.jpg';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-section">
          <h1>Discover LushLuxe</h1>
          <p>
            At <strong>LushLuxe</strong>, we believe fashion is more than fabric—it's a feeling. Our mission is to help you show up confidently, every day, with pieces that blend comfort, trend, and personal style.
          </p>

          <h2>What Makes Us Different?</h2>
          <ul>
            <li><strong>Style for Every Story:</strong> Whether you’re dressing for work, a weekend out, or your little one’s playdate, we’ve got you covered—from men’s staples to women’s essentials and kids’ favorites.</li>
            <li><strong>Curated with Care:</strong> Each product is chosen with you in mind—versatile, quality, and ready to elevate your wardrobe.</li>
            <li><strong>Shopping, Simplified:</strong> No clutter. Just clean categories, honest product info, and a smooth experience from click to checkout.</li>
          </ul>

          <h2>Our Vision</h2>
          <p>
            LushLuxe is more than a store—it's a style destination for everyone. We aim to make great fashion accessible, relatable, and truly wearable.
          </p>
        </div>

        <div className="about-image-wrapper">
          <img src={AboutImage} alt="LushLuxe lifestyle" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
