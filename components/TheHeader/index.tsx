import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../Logo";

const TheHeader: React.FunctionComponent = () => {
    const __router = useRouter();

    function isRoute(route: string): string {
        if(__router.pathname === route) {
            return "#e0e0e0";
        } else {
            return "";
        }
    }

    return <>
        <header id="header">
            <div className="header__container">
                <Logo />
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="header__burger-menu">
                    <div />
                    <div />
                    <div />
                </label>
                <nav id="header__nav">
                    <ul>
                        <li>
                            <Link href="/time">
                                <a style={{ color: isRoute("/time") }}>
                                    time
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a style={{ color: isRoute("/") }}>
                                    cinema
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/producers">
                                <a style={{ color: isRoute("/producers") }}>
                                    producers
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/acters">
                                <a style={{ color: isRoute("/acters") }}>
                                    acters
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/soon">
                                <a style={{ color: isRoute("/soon") }}>
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

export default TheHeader;