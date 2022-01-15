import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  const headerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    fontSize: '1.5rem',
    padding: '1rem 2rem',
    boxShadow: '0 10px 30px 5px hsl(0deg 0% 40% / 50%), inset 0 4px 10px 5px hsl(0deg 0% 59% / 50%)',
  };

  const navUlStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.25rem',
    listStyle: 'none',
    fontWeight: '600',
  };

  return (
    <header className="header" style={headerStyle}>
      <h1 style={{ fontWeight: '900' }}>
        Math Magicians
      </h1>
      <nav>
        <ul style={navUlStyle}>
          { links.map((link) => (
            <li key={link.id} style={{ cursor: 'pointer' }}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          )) }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
