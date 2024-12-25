import Link from 'next/link'

const Logo = ({href}) =>
{
    return (
        <Link href={href}>
            <h1 className="logo text-3xl uppercase">Flixx</h1>
        </Link>
    );
}

export default Logo;