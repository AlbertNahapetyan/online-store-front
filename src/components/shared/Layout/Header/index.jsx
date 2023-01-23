import Image from 'next/image'
import Link from 'next/link'
import LeftPart from './LeftPart'
import RightPart from './RightPart'

const Header = () => {
  return (
    <>
      <header
        className={`flex items-center fixed top-0
              px-4 w-full h-20 bg-black-250 border-b-2 border-gray-250 z-50 transition-height duration-500 overflow-hidden
              top-0  
            `}
      >
        <div className="ml-2">
          <Link href="/">
            <Image
              src="/images/amazon.png"
              width={100}
              height={80}
              alt="Logo"
            />
          </Link>
        </div>
        <LeftPart />
        <RightPart />
      </header>
    </>
  )
}

export default Header
