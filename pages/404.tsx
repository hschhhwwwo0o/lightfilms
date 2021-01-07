import Header from "../components/Header/header"

const C404: React.FunctionComponent = () => {
    return <>
        <Header />
        <div className = "custom404">
            <div>
                <h1>404</h1>
                <p>Page not found</p>
            </div>
        </div>
    </>
}

export default C404