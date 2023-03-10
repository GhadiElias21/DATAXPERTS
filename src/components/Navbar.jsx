import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white text-gray-300"'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DATAXPERTS.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4  cursor-pointer' >Home</li>
        <li className='p-4 cursor-pointer'><Link  to="analytics" smooth={true} offset={50} duration={500} >
         analytics
        </Link></li>
        <li className='p-4  cursor-pointer'><Link  to="offers" smooth={true} offset={50} duration={500} >
         offers
        </Link></li>
        <li className='p-4    cursor-pointer'><Link  to="about" smooth={true} offset={50} duration={500} >
         about
        </Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
