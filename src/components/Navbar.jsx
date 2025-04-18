import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <h1 className="text-xl font-bold tracking-wide">React Props Practice</h1>

        
        <div className="space-x-6 text-sm md:text-base font-medium">
          <Link to="/" className="hover:underline transition">Home</Link>
          <Link to="/practice" className="hover:underline transition">Practice</Link>
          <Link to="/resources" className="hover:underline transition">Resources</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
