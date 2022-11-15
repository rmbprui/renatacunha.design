import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="flex justify-around py-5 m-auto">
          <Link to="/" className="font-bold">
            Home
          </Link>
          <Link to="/about" className="font-bold">
            About
          </Link>
          <Link to="/contact" className="font-bold">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
