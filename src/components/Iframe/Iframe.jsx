import React ,{useRef,useEffect} from 'react'
import "./Iframe.css"
import { useGetVideosQuery } from '../../services/movie-api'
import { FaSadCry } from 'react-icons/fa'
const Iframe = ({category,id}) => {
  const {data,isFetching}=useGetVideosQuery({category,id})
  if(isFetching){
      return "Loading..."
  }

  if(data?.results?.length<=0){
      return <> <FaSadCry/> Sorry! We have not found any trailer </>
  }
  return (
    <div className='videos'>
    {
        data && data.results?.slice(0,4).map(item=>(
            <Video key={item.id} vkey={item.key} vname={item.name}/>
        ))
    }
    </div>
  )
}

export const Video=({vkey,vname})=>{
    const iref=useRef(null)
    useEffect(() => {
        const height = iref.current.offsetWidth * 9 / 16 + 'px';
        //  iref.current.setAttribute('height', height);
    }, [])
    
    return (
    <div className="iframe-video">
        <div className='video-title'>
        <h2>{vname}</h2>

        </div>
        
           <iframe ref={iref} src={`https://www.youtube.com/embed/${vkey}`} frameborder="0"></iframe>
        
    </div>
    )
}

export default Iframe