const Logo: React.FunctionComponent = () => {
    return <>
        <div className = "__logo">
            LIGHTFILMS
        </div>
        <style jsx >{
            `
                .__logo {
                    /* <Logo > */

                    font-family: Lato;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 18px;
                    line-height: 22px;

                    letter-spacing: 0.1em;

                    color: #C4C4C4;
                }
            `
        }
        </style>
    </>
}

export default Logo;