import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonList=['all','Prabhas','Rohitsharma','virat','all','Prabhas','Rohitsharma','virat']
  return (
    <div className='flex' >
      {buttonList.map((name,index)=><div key={index}><Button  name={name}/></div>)}
      
      </div>
  )
}

export default ButtonList