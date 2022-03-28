import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";
import Video from "../../components/video/Video";
import { checkSubscriptionStatus, getChannelDetailsById } from "../../redux/actions/channel.action";
import { getVideosByChannel } from "../../redux/actions/video.action";
import "./_channelScreen.scss"
import numeral from "numeral"

const ChannelScreen = () => {

  const {channelId} = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideosByChannel(channelId))
    dispatch(getChannelDetailsById(channelId))
    dispatch(checkSubscriptionStatus(channelId))
  }, [channelId, dispatch])

  const {video, loading} = useSelector(state => state.channelVideos)
  const {snippet, statistics} = useSelector(state => state.channelDetails.channel)
  const subscriptionStatus = useSelector(state => state.channelDetails.subscriptionStatus)
  
  return (
    <div className="channel__screen">
      
      <div className="channel__screen__top">
        <img src={snippet?.thumbnails?.default?.url} alt="Channel_icon"/>
        <div className="channel__screen__details">
          <h3>{snippet?.title}</h3>
          <span>{numeral(statistics?.subscriberCount).format("0.a")}{" "}subscriber</span>
        </div>
        <button className={subscriptionStatus ? 'gray' : 'red'}>{subscriptionStatus ? "Subscribed" : "Subscribe"}</button>
      </div>
      
      <div className="channel__screen__grid">
        {!loading ? video.map((video, i)=>(
          <Video key={i} video={video} ChannelScreen/>
        )) : (           
          [...Array(24).map((a,i)=><SkeletonVideo key={i}/>)]
        )}
      </div>
    </div>
  )
}

export default ChannelScreen