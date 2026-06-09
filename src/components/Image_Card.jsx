import React from 'react'

const Image_Card = (props) => {
  return (
    <div>
      <img src={props.link} className='h-70 w-70 object-cover' />
      <h2>Author : {props.author} </h2>
    </div>
  )
}

export default Image_Card