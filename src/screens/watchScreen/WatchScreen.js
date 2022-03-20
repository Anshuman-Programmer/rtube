

import React from 'react'
import VideoHozizontal from '../../components/videoHorizontal/VideoHozizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import Comments from '../../components/comments/Comments'
import './watchScreen.scss'

const WatchScreen = () => {
  return (
    <div className='watchScreen'>
      <div className='watchScreen__left'>
        <div className='watchScreen__left__player'>
          <iframe 
            frameBorder="0"
            title='my video'
            allowFullScreen
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
        <VideoMetaData/>
        <Comments/>
      </div>
      <div className='watchScreen__right'>
        {
          [...Array(10)].map(()=> <VideoHozizontal/>)
        }
      </div>
    </div>
  )
}

export default WatchScreen