import { useRouter } from "next/router";
import Link from "next/link";

import Logo from "../Logo";

const Header: React.FC = () => {

    const brightColorLink = "#e0e0e0"
    const _router = useRouter()

    return <>
        <header id="header">
            <div className="container">
                <Logo />
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
                <nav id="nav">
                    <ul>
                        <li>
                            <Link href="/time">
                                <a 
                                    style={{ 
                                        color: _router.pathname === "/time" ? 
                                        brightColorLink : ""
                                    }}
                                >
                                    time
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a 
                                    style={{ 
                                        color: _router.pathname === "/" || 
                                        _router.pathname.split("/")[1] === "film" 
                                        ? 
                                        brightColorLink : "" 
                                    }}
                                >
                                    cinema
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/producers">
                                <a 
                                    style={{ 
                                        color: _router.pathname === "/producers" ? 
                                        brightColorLink : "" 
                                    }}
                                >
                                    producers
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/acters">
                                <a 
                                    style={{ 
                                        color: _router.pathname === "/acters" ? 
                                        brightColorLink : "" 
                                    }}
                                >
                                    acters
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/soon">
                                <a 
                                    style={{ 
                                        color: _router.pathname === "/soon" ? 
                                        brightColorLink : "" 
                                    }}
                                >
                                    genres
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}

export default Header;