import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import ProductList from './pages/products/ProductList'; 
import Layout from './components/layout/Layout';

const App = ()=> {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/productdata" element={<Layout><ProductList /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
        </Routes>
    </Router>
  );
}

export default App;
