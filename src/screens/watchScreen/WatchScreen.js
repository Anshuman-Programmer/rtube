

import React, { useEffect } from 'react'
import VideoHozizontal from '../../components/videoHorizontal/VideoHozizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import Comments from '../../components/comments/Comments'
import './watchScreen.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedVideo, getVideoById } from '../../redux/actions/video.action'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const WatchScreen = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoById(id))
    dispatch(getRelatedVideo(id))
  }, [dispatch, id])

  const { video, loading } = useSelector( state => state.selectedVideo)
  const { videos, loading: relatedVideoLoading } = useSelector( state => state.relatedVideos)
  

  return (
    <div className='watchScreen'>
      <div className='watchScreen__left'>
        <div className='watchScreen__left__player'>
          <iframe 
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}>
          </iframe>
        </div>
        {!loading ? <VideoMetaData video={video} videoId={id}/> : <h5>Loading...</h5>}
        
        <Comments videoId={id} totalComments={video?.statistics?.commentCount}/>
      </div>
      <div className='watchScreen__right'>
        {
          !loading && videos ? videos?.filter(video => video.snippet).map((video)=> <VideoHozizontal video={video} key={video.id.videoId}/>) : (<SkeletonTheme>
              <Skeleton width={"100%"} height="130px" count={15}/>
            </SkeletonTheme>)
        }
      </div>
    </div>
  )
}

export default WatchScreen