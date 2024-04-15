import React from 'react'

const Button = (props) => {
  return (
    <button className='md:text-adainblack hover:text-adainwhite  bg-adainyellow hover:bg-adainblack md:bg:hover-adainblack rounded-xl lg:m-8 p-1  w-42 shadow-md
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button