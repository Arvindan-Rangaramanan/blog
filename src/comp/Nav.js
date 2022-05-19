import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Nav() {
  const [menu, setMenu] = useState(true);
  const [IsLogged, setIsLogged] = useState(false);

  const changeMenu = () => {
    setMenu(!menu);
  };

  let links = [
    { name: 'Blogs', link: '/' },
    { name: 'Pictures', link: '/' },
    { name: 'More', link: '/' },
    { name: IsLogged ? 'Logout' : 'Login', link: '/login' },
  ];

  return (
    <div className="fixed left-0 right-0 bg-white">
      <div className="nav mx-auto max-w-full  bg-white lg:flex lg:justify-between lg:p-6">
        <div className="logo font-cinzel text-xl font-extrabold flex justify-between p-2 px-4 items-center lg:text-5xl  ">
          ARVINDAN.
          <span
            onClick={changeMenu}
            className="menu self-center lg:hidden cursor-pointer"
          >
            {menu && <AiOutlineMenu />}
            {!menu && <AiOutlineClose />}
          </span>
        </div>
        <div className="links lg:flex items-center  ">
          {!menu && (
            <ul className="lg:hidden translate-y-5">
              {links.map((link) => (
                <li key={link.link} className="p-2 text-center">
                  <a
                    className="font-spectral hover:text-red-600"
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <ul className="hidden  lg:flex lg:mr-5  ">
            {links.map((link) => (
              <li key={link.link} className="  px-6">
                <Link
                  className="font-spectral hover:text-red-600 lg:text-2xl cursor-pointer"
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
