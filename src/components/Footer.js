import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="relative flex justify-between px-5 py-3 bg-zinc-800">
        <Link to="/contact" className="flex items-baseline gap-2">
          <i className="far fa-envelope"></i>
          <p>Get In Touch!</p>
        </Link>
        <div className="flex items-baseline gap-2">
          <i className="far fa-copyright"></i>
          <p>{new Date().getFullYear()} | Renata Cunha</p>
        </div>
        <div>
          by{' '}
          <a className="underline" href="https://rui.dev">
            rui.dev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
