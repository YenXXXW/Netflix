import React, { useEffect, useRef, useState } from 'react'
import { Movie } from '../typings'
import { IoIosArrowForward , IoIosArrowBack } from 'react-icons/io' 
import { Thumbnails } from './thumbnails'
import { FaRegFrown } from 'react-icons/fa'

interface Props {
    title : string ,
    movies : Movie[]
    // movie : Movie | DocumentData[]
}

export const Row = ({title , movies}:Props) => {

  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved , setIsMoved ] = useState(false)
  const handleClick =(direction : string)=>{
    setIsMoved(true)
    if(rowRef.current){
      const { scrollLeft,clientWidth} = rowRef.current

      const scrollTo = 
        direction === 'left' 
        ? scrollLeft-clientWidth
        : scrollLeft+clientWidth

      rowRef.current.scrollTo({left : scrollTo , behavior : 'smooth'})
    }
  }
  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
            {title}
        </h2>
        <div className='group relative -ml-2'>
            <IoIosArrowBack            
             className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 
             transition hover:scale-125 group-hover:opacity-100 ${isMoved  == false && 'hidden' }`}
             onClick={()=>handleClick('left')}
            />
            <div
            ref={rowRef}
            className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2
            scrollbar-hide'>
              {
                movies.map(movie=>(
                  <Thumbnails key={movie.id} movie={movie}/>
                ))
              }
              
            </div>
            <IoIosArrowForward
             className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
             onClick={()=>handleClick('right')}
            />
        </div>
    </div>
    
  )
}
