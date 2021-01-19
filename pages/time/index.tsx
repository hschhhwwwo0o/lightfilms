import DefaultLayout from "../../layouts/default";
import Head from "next/head";
import Link from "next/link";

const TimePage = () => {
    return <DefaultLayout>
        <Head>
            <title>Keep up to time with temporary events.</title>
            <meta name="description" content={`Best time of cinema. Read more about the time. LIGHTFILMS. 1940s 1950s 1960s 1970s. `} />
        </Head>
        <div id="time">
            <div id="time_traveler">
                <h2>Keep up to time with temporary events.</h2>
                <ul>
                    <li>
                        <Link 
                            href="/time/[id]"
                            as = {`/time/${1940}`}
                        >
                            <a>40's</a>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/time/[id]"
                            as = {`/time/${1950}`}
                        >
                            <a>50's</a>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/time/[id]"
                            as = {`/time/${1960}`}
                        >
                            <a>60's</a>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/time/[id]"
                            as = {`/time/${1970}`}
                        >
                            <a>70's</a>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/time/[id]"
                            as = {`/time/${1980}`}
                        >
                            <a>80's</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </DefaultLayout>
}

export default TimePage;