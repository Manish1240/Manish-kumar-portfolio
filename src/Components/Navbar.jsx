const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Manish.dev</h1>
        <div className="flex gap-6 items-center">
          <a href="#about" className="capitalize hover:text-teal-400">About</a>
          <a href="#skills" className="capitalize hover:text-teal-400">Skills</a>
          <a href="#projects" className="capitalize hover:text-teal-400">Projects</a>
          <a href="#contact" className="capitalize hover:text-teal-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;