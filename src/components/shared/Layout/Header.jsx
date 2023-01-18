import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
    const [direction, setDirection] = useState(true)

    useEffect(() => {
        let lastScrollTop = 0

        const scrollDetection = () => {
            let scrollDirection = window.scrollY
            if (scrollDirection > lastScrollTop) {
                setDirection(false)
            } else {
                setDirection(true)
            }
            lastScrollTop = scrollDirection <= 0 ? 0 : scrollDirection
        }

        window.addEventListener('scroll', scrollDetection)

        return () => {
            window.removeEventListener('scroll', scrollDetection)
        }
    }, [])

    return (
        <>
            <header className={`flex items-center fixed top-0
              px-4 w-full h-20 bg-black-250 border-b-2 border-gray-250 z-50 transition-height duration-500 overflow-hidden
              ${direction ? `top-0` : `-top-20`}    
            `}>
                <Image src="/images/amazon.png" width={100} height={80} alt="Logo" />
            </header>
        </>
    )
}

export default Header