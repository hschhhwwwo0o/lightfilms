import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";

const DefaultLayout = ({ children }) => {
    return <>
        <TheHeader />
            { children }
        <TheFooter />
    </>
}

export default DefaultLayout;