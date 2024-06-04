import { useState } from 'react';
import PizzaLogo from '../assets/pizza-logo.jpg';

function Navbar() {
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

        <li className="w-full lg:h-full text-right lg:justify-self-center">
          <a href="#home" className="block lg:h-full lg:flex lg:items-center w-full p-2 pr-[10px] hover:bg-[#bdc3c7] hover:text-black transition-all duration-200">Home</a>
        </li>
        <li className="w-full lg:h-full text-right">
          <a href="#menu" className="block lg:h-full lg:flex lg:items-center w-full p-2 pr-[10px] hover:bg-[#bdc3c7] hover:text-black transition-all duration-200">Menu</a>
        </li>
        <li className="w-full lg:h-full text-right">
          <a href="#about" className="block lg:h-full lg:flex lg:items-center w-full p-2 pr-[10px] hover:bg-[#bdc3c7] hover:text-black transition-all duration-200">About</a>
        </li>
        <li className="w-full lg:h-full text-right">
          <a href="#contact" className="block lg:h-full lg:flex lg:items-center w-full p-2 pr-[10px] hover:bg-[#bdc3c7] hover:text-black transition-all duration-200">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
