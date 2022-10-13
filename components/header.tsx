import { MdOutlineSearch } from 'react-icons/md'
import { HiBell } from 'react-icons/hi'
import Link from 'next/link'
import { useState , useEffect } from 'react'

export const Header = () => {
  const [isScrolled , setIsScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      if (window.scrollY > 0){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll' , handleScroll)

    return ()=> removeEventListener('scroll' , handleScroll)
  },[])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'} `}>
        <div className="flex items-center w-full space-x-2 md:space-x-10">
            <img
            src ='https://rb.gy/ulxxee'
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            />
            <ul className="hidden space-x-4 md:flex">
                <li className="headerLink">Home</li>
                <li className="headerLink">Tv Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">News & Popular</li>
                <li className="headerLink">My List</li>
            </ul>
        </div>
        <div className='flex items-center space-x-4 text-sm font-light'>
          <MdOutlineSearch className='hidden h-6 w-6 sm:block' size={'24'}/>
          <p className='hidden lg:inline'>Kids</p>
          <HiBell className='hidden h-6 w-6 sm:block' size={'24'}/>
          <Link href='/account'>
            <img
              src="https://rb.gy/g1pwyx"
              alt=""
              className="cursor-pointer rounded"
            />
          </Link>
        </div>
    </header>
  )
}
