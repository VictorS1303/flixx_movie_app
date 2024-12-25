'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from './Logo.jsx'

const Navigation = ({ children, navigationLinks = [] }) =>
{
    const currentPath = usePathname()

    return (
        <nav className="flex items-center justify-between px-36 py-8 bg-black">
            <Logo href="/" />
            <ul className="flex gap-12 text-xl max-md:flex-col max-md:text-center max-md:justify-center">
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
    );
}

export default Navigation;