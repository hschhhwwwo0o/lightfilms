import Link from "next/link";

const Logo: React.FunctionComponent = () => {
    return <>
        <Link href="/">
            <a className="logo">
                LIGHTFILMS
            </a>
        </Link>
    </>
}

export default Logo;