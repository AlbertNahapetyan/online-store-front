import Footer from "./Footer";
import Header from "../Layout/Header"
import Navbar from "../Layout/Navbar"

const Layout = ({ children }) => {
    return  (
        <>
            <Header />
            <div className="flex w-full">
                <Navbar />
                <div className="mt-20 ml-76 pl-6 pr-4 py-4 w-4/5">
                    { children }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout