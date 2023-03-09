import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='flex flex-col p-2 m-2 w-60 shadow-lg'>
        <img className='rounded-lg' src={thumbnails?.medium?.url} alt='thumbanail'/>
        <ul>
            <li className='font-bold '>{title}</li>
            <li className=''>{channelTitle}</li>
            <li>{statistics?.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard