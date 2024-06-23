/* eslint-disable react/prop-types */

const Navbar_Lists = ({list, refProp}) => {
    return (
        <li className="w-full lg:h-full text-right">
            <button onClick={() => {
                setTimeout(() => {
                    refProp.current.scrollIntoView({ behavior: 'smooth' });
                  }, 0);
            }} className="block lg:h-full lg:flex lg:items-center w-full p-2 pr-[10px] hover:bg-[#bdc3c7] hover:text-black transition-all duration-200 cursor-pointer">{list}</button>
        </li>
    )
}

export default Navbar_Lists