
const Navbar_Lists = ({list}) => {
    return (
        <li className="w-full lg:h-full text-right">
            <a href={`#${list}`} className="block lg:h-full lg:flex lg:items-center w-full p-2 pr-[10px] hover:bg-[#bdc3c7] hover:text-black transition-all duration-200">{list}</a>
        </li>
    )
}

export default Navbar_Lists