import DefaultLayout from "../layouts/default";
import Meta from "../components/Meta";

const ComingSoon = () => {
    return <>
        <DefaultLayout>
            <Meta 
                titleShort  = "LIGHTFILMS | Coming Soon"
                titleLong   = "LIGHTFILMS. Coming Soon"
                description = {`LIGHTFILMS. The page is not available yet, but we will soon create something new here :)`}
                url         = "https://lightfilms-ssandry.vercel.app/soon"
                keywords    = "LIGHTFILMS. Coming Soon"
            />
            <section id="coming">
                <h1 className="h2-fk">Coming Soon</h1>
            </section>
        </DefaultLayout>
        <style jsx >
        {`
            #coming {
                width: 100%;
                height: calc(100vh - 200px);

                display: flex;
                align-items: center;
                justify-content: center;
            }
        `}
        </style>
    </>
}

export default ComingSoon;