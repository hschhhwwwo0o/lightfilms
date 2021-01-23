import DefaultLayout from "../layouts/default";

const ComingSoon = () => {
    return <>
        <DefaultLayout>
            <div id="coming">
                <h2>Coming Soon</h2>
            </div>
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