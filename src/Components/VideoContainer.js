import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {YOUTUBE_VIDEO_API} from '../utils/contsants'
import VideoCard,{AdVideoCard} from './VideoCard';

const VideoContainer = () => {

  const [videos,setVideos]=useState([])
  useEffect(()=>{
    getVideos()
  },[]);
  
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEO_API);
    const json= await data.json();
    setVideos(json.items)
    console.log(json)
  }
  return (
    <div className='flex flex-wrap'>
      {videos[0]&&< AdVideoCard info={videos[0]}/>}
      {videos.map((video=>(
        <Link to={'/watch?v='+video.id}>
        <VideoCard key={video.id} info={video}/>
        </Link>
      )))}
      
    </div>
  )
}

export default VideoContainer