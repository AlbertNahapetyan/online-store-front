import Footer from './Footer'
import Header from '../Layout/Header'
import Navbar from '../Layout/Navbar'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <Navbar />
        <div className="mt-20 ml-1/5 pl-6 pr-4 py-4 w-4/5">{children}</div>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
