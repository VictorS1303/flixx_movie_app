import Link from 'next/link'

const Button = ({href, buttonText}) =>
{
    return (
        <Link href={href} className="flex text-center align-center border-2 border-yellow-300 text-white py-3 px-8 rounded-lg w-fit transition-bg duration-150 ease-in hover:bg-yellow-300">{buttonText}</Link>
    );
}

export default Button;