import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
 const content=['Sports','Gaming','Movies','Music','News']
 const watcLater=['Sports','Gaming','Movies','Music','News']
const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  if(!isMenuOpen) return null
  return (
    <div className='m-2 p-5 shadow-lg w-48 col-span-2'>
      
      <ul>
        <li>
          <Link to='/'>Home</Link>
          </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold mb-2'>Subscriptions</h1>
      <ul>
        {content.map((each,index)=>{
          return(
            <li key={index} >{each}</li>
          )
        })}
      </ul>
      <h1 className='font-bold mt-5'>Watch Later</h1>
      <ul>
        {watcLater.map((each,index)=>{
          return(
            <li key={index}>{each}</li>
          )
        })}
      </ul>
      
    </div>
  )
}

export default Sidebar