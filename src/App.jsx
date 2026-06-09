import React, { useEffect, useState } from 'react'
import Image_Card from './components/Image_Card'

const App = () => {

  const [image, setimage] = useState([])
  const [pag, setpag] = useState(1)

  async function getData(){
    let url=`https://picsum.photos/v2/list?page=${pag}&limit=100`
    let res=await fetch(url)
    let data=await res.json()
    let copy_image=[]
    data.forEach(element => {
      copy_image.push( {link : element.download_url , author : element.author} )
    });
    setimage(copy_image)
  }

  useEffect(() => {
    getData()
  }, [pag])
  

  function PageIncrement(){
    if (pag < 199){
      setpag(prev => prev + 1)
    }
  }
  function PageDecrement(){
    if (pag>1){
     setpag(prev => prev - 1)
    }
  }

  
  return (
    <div className='bg-black h-full text-white m-2'>
      <nav className='bg-red-400 h-15 flex justify-center items-center'>
        <h1 className='italic font-medium text-2xl'>Welcome to Jhakkas React Gallery</h1>
      </nav>
      <div className='flex flex-wrap gap-5 p-6 justify-around overflow-scroll h-[80vh]' >
        {image.map((elem,id)=>{
          return <Image_Card key={id} link={elem.link} author={elem.author}/>
        })}
      </div>
      <div className="flex page h-20 justify-center items-center gap-10">
        <button 
            onClick={PageDecrement} 
            disabled={pag===1}
            style={{opacity : pag===1 ? 0.5 : 1}}
            className='bg-yellow-400 active:scale-110 h-10 w-20 font-medium text-2xl rounded-2xl text-black'>Prev</button>
        <h1>Page  {pag}</h1>
        <button 
        onClick={PageIncrement} 
        disabled={pag===199}
            style={{opacity : pag===199 ? 0.5 : 1}}
        className='bg-yellow-400  active:scale-110 h-10 w-20 font-medium text-2xl rounded-2xl text-black'>Next</button>
      </div>
    </div>
  )
}

export default App