import React from 'react'

const Image_Card = (props) => {
  return (
    <div>
      <img
        src={`https://picsum.photos/id/${props.id}/300/300`}
        className='h-70 w-70 object-cover cursor-pointer'
        loading='lazy'
        onClick={() => window.open(props.link, "_blank")}
        alt={props.author}
      />
      <h2>Author : {props.author} </h2>
    </div>
  )
}

export default Image_Card