import Link from 'next/link';

const Navbar = () => {
  return (
<nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Blog Title */}
        <div className="text-white font-extrabold text-2xl">
          <Link href="/" className="hover:text-gray-300 transition duration-300">
            My Blog
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-white font-medium text-lg hover:text-gray-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="text-white font-medium text-lg hover:text-gray-300 transition duration-300">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white font-medium text-lg hover:text-gray-300 transition duration-300">
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
