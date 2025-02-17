import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/fruits" className="nav-link">Fruits</Link>
        <Link to="/vegetables" className="nav-link">Vegetables</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;