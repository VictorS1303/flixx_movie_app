'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo.jsx'
import { FaBars, FaTimes } from "react-icons/fa"

const Navigation = ({ children, navigationLinks = [] }) =>
{
    const currentPath = usePathname()
    const [toggleMobileMenuOpenState, setToggleMobileMenuOpenState] = useState(false);

    const toggleMobileMenuState = () =>
    {
        setToggleMobileMenuOpenState(!toggleMobileMenuOpenState);
    };

    return (
        <>
            <button onClick={toggleMobileMenuState} className="relative md:hidden max-md:block">
                {toggleMobileMenuOpenState ? (
                    <FaTimes
                        size={30}
                        className={`text-yellow-300 absolute top-[20px] transition-all duration-300 ease-in opacity-100 right-[300px] max-md:block`}
                    />
                ) : (
                    <FaBars
                        size={30}
                        className={`text-yellow-300 absolute top-[20px] transition-all duration-300 ease-in opacity-100 right-[20px] max-md:block`}
                    />
                )}
            </button>
            <nav className={`flex justify-between px-36 py-8 bg-black transition-all duration-300 ease-in max-md:h-full max-md:w-[100px] max-md:fixed max-md:flex-col 
                ${toggleMobileMenuOpenState ? 'max-md:right-0' : 'max-md:-right-[350px]'}
`}>
                <div className="max-md:absolute max-md:bottom-4 max-md:left-1/2 max-md-transform max-md:-translate-x-1/2">
                    <Logo href="/" />
                </div>
                <ul className="flex gap-12 text-xl max-md:flex-col max-md:text-center max-md:justify-center max-md:items-center max-md:h-full max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md-transform max-md:-translate-x-1/2 max-md:-translate-y-1/2">
                    {navigationLinks.map((item, index) => (
                        <li
                            key={index}
                            className={`uppercase text-bolder tracking-wide transition-text duration-150 ease-in ${currentPath !== item.href
                                ? "hover:text-yellow-300"
                                : ""
                                }`}
                        >
                            <Link
                                href={item.href}
                                className={`block ${currentPath === item.href
                                    ? "pointer-events-none text-yellow-300"
                                    : ""
                                    }`}
                                style={{ lineHeight: "1.2", padding: "0 2px" }}
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Navigation;