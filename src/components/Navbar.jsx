import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { mylogo, menu, close } from '../assets';
import { navLinks } from '../constants';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Add FontAwesome icons

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={mylogo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Rohit&nbsp;
            <span className='sm:block hidden'>
              | Researcher at ISRO-SAC | MERN Stack | Artificial Intelligence
            </span>
          </p>
        </Link>

        {/* LinkedIn and Gmail Icons (on large screens) */}
        <div className='hidden sm:flex gap-1 items-center ml-40'>
          <a
            href='https://www.linkedin.com/in/rohit-baruah/' // Replace with your LinkedIn profile
            target='_blank'
            rel='noopener noreferrer'
            className='text-white mx-4'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='mailto:baruahrohit344@gmail.com' // Replace with your Gmail ID
            className='text-white mx-4'
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          
        {/* Mobile Menu Toggle */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
        <a
            href='https://www.linkedin.com/in/rohit-baruah/' // Replace with your LinkedIn profile
            target='_blank'
            rel='noopener noreferrer'
            className='text-white mx-0'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='mailto:baruahrohit344@gmail.com' // Replace with your Gmail ID
            className='text-white mx-7'
          >
            <FaEnvelope size={24} />
          </a>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
