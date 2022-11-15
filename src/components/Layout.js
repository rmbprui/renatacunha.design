// Components
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Layout = ({ navbar = true, footer = true, children }) => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-zinc-900">
      {navbar && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;
