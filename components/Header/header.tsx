import Logo from "../Logo";
import Link from "next/link";

import { useState, MouseEvent } from 'react';

const Header: React.FC = () => {

    const [count, setCount] = useState<boolean>(false);

    return <>
        <header onClick = { () => { console.log( "da" ) } }>
            <div className="container">
                <Logo />
                <input type="checkbox" id="checkbox" />
                <label htmlFor  = "checkbox" className="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
                <nav id = "nav">
                    <ul>
                        <li>
                            <Link href="/time">
                                <a>time</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>cinema</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/producers">
                                <a>producers</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/acters">
                                <a>acters</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a>genres</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}

export default Header;