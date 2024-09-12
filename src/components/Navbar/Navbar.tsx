const Navbar = () => {
  return (
    <header className='py-5 px-5 flex items-center justify-between bg-gray-700 text-white'>
      <h6 className='tracking-[2px]'>GITHUB FINDER</h6>
      <nav className='flex list-none gap-5'>
        <li>
          <a href='#'>Homepage</a>
        </li>
        <li>
          <a href='#'>About us</a>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
