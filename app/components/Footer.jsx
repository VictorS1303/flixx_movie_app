import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"


const Footer = () =>
{
    return (
        <footer className="w-full flex items-center justify-between px-36 my-4">
            <h1 className="logo uppercase font-bold text-3xl">Flixx</h1>

            <div className="socials-container flex gap-4">
                <Link href="#">
                    <FaFacebookF className="cursor-pointer transition-text duration-150 ease-in hover:text-yellow-300" size={25} />
                </Link>
                <Link href="#">
                    <FaTwitter className="cursor-pointer transition-text duration-150 ease-in hover:text-yellow-300" size={25} />
                </Link>
                <Link href="#">
                    <FaInstagram className="cursor-pointer transition-text duration-150 ease-in hover:text-yellow-300" size={25} />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;