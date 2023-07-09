import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCHQUERY } from '../utils/contsants'



const Head = () => {

const [searchQuery,setSearchQuery]=useState()
console.log(searchQuery)


useEffect(()=>{

  console.log(searchQuery)
  const timer=setTimeout(()=>getSearchSuggestions(),200)
  return ()=>clearTimeout(timer)


},[searchQuery])

const getSearchSuggestions=async()=>{
  const data=await fetch(YOUTUBE_SEARCHQUERY+searchQuery)
  const json=await data.json()
  console.log(json)

}




  const dispatch=useDispatch()
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())

  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg' >
    <div className='flex col-span-1'>
        <img  
        onClick={()=>toggleMenuHandler()}
        className='h-8 mr-2 cursor-pointer'
        alt='menu'
         src='https://image.shutterstock.com/image-vector/hamburger-menu-bar-line-art-260nw-273559643.jpg'/>
        <a href='/'>
        <img 
        
        className='h-8 cursor-pointer' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'/>
        </a>
    </div>
    <div className='col-span-10 px-15'>
        <input type='text' vlaue={searchQuery} 
        onChange={(e)=>setSearchQuery(e.target.value)}
        className='w-1/2 border border-slate-900 rounded-l-full p-2'/>
        <button className=' border border-l-slate-900 p-2 rounded-r-full bg-gray-100 '> 🔍</button>
    </div>
    <div className='col-span-1'>
        <img className='h-8 ' alt='userlogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavCDvlRFf6Y1gcbHAoYvLDWSjR6GFpI1sYErd3F8&s'/>
    </div>
    </div>
  )
}

export default Head