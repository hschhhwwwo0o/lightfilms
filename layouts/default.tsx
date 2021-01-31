import TheHeader from "../components/TheHeader/index";
import TheFooter from "../components/TheFooter/index";

const DefaultLayout = ({ children }) => {
    return <>
        <TheHeader />
            { children }
        <TheFooter />
    </>
}

export default DefaultLayout;