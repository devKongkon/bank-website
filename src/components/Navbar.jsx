import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";



const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="w-full flex py-6 justify-between items-center">
            <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
            <ul className="list-none hidden sm:flex  justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins cursor-pointer font-normal text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain duration-1000 cursor-pointer"
                    onClick={() => setToggle((pre) => !pre)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} right-0 absolute p-6 bg-black-gradient min-w-[140px] my- top-14 sidebar`}>
                    <ul className="list-none flex-col  justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins cursor-pointer font-normal text-[16px] py-2 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                            >
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;