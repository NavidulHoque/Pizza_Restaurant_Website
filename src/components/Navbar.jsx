/* eslint-disable react/prop-types */
import { useState } from 'react';
import PizzaLogo from '../assets/pizza-logo.jpg';
import Navbar_Lists from './Navbar_Lists.jsx';

function Navbar({homeRef, menuRef, aboutRef, contactRef}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[rgba(0,_0,_0,_0.6)] hover:bg-black fixed w-full top-0 flex flex-col lg:flex-row lg:justify-between z-10 transition-all duration-200">

      <div className="flex justify-between items-center p-2">

        <img src={PizzaLogo} alt="pizzalogo" className='h-[50px] w-[50px]'/>

        <button onClick={() => setIsOpen(!isOpen)} className="border-2 border-white p-2 rounded text-2xl lg:hidden">
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-white`}></i>
        </button>

      </div>

      <ul className={`lg:flex lg:flex-row lg:justify-center lg:w-auto lg:items-center lg:gap-x-5 lg:mr-[10px] flex-col items-end w-full text-white text-[25px] list-none ${isOpen ? 'flex' : 'hidden'}`}>

        <Navbar_Lists refProp={homeRef} list="home"/>
        <Navbar_Lists refProp={menuRef} list="menu"/>
        <Navbar_Lists refProp={aboutRef} list="about"/>
        <Navbar_Lists refProp={contactRef} list="contact"/>
        
      </ul>
    </nav>
  );
}

export default Navbar;
