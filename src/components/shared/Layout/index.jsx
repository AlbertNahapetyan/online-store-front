
import Footer from "./Footer";
import Header from "@/components/shared/Layout/Header";

const Layout = ({ children }) => {
    return  (
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

export default Layout