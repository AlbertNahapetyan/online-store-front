import Footer from "./Footer";
import Header from "../Layout/Header"
import Navbar from "../Layout/Navbar"

const Layout = ({ children }) => {
    return  (
        <>
            <Header />
            <div className="flex w-full">
                <Navbar />
                <div className="mt-20 ml-76 p-4">
                    { children }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout