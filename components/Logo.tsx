import React, { FunctionComponent } from "react";
import Link from "next/link";

const Logo: FunctionComponent = () => {
    return <>
        <Link href="/">
            <a className="logo">
                LIGHTFILMS
            </a>
        </Link>
    </>
}

export default Logo;