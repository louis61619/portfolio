import React from 'react';
import { MenuLink } from './menu-link'

const Header: React.FC = () => {
  return (
    <header className="flex flex-row items-center px-6 sm:px-12 py-6">
      <div className="mr-6">
        <div>
          <div
            className="transition duration-200 ease-in-out flex flex-row items-center font-extrabold text-sm tracking-widest uppercase"
          >
            Louis
          </div>
        </div>
      </div>
      <nav>
        <ul className="flex flex-row">
          <MenuLink name="project" href="/" />
          <MenuLink name="about" href="/about" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
