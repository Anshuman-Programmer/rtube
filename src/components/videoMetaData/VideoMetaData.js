
import "./_videoMetaData.scss"
import moment from "moment"
import numeral from "numeral"
import {MdThumbUp} from "react-icons/md"
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkSubscriptionStatus, getChannelDetailsById } from "../../redux/actions/channel.action";

const VideoMetaData = ({video: {snippet, statistics}, videoId}) => {

  const {title, description, publishedAt, channelTitle, channelId} = snippet
  const {viewCount, likeCount} = statistics

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChannelDetailsById(channelId))
    dispatch(checkSubscriptionStatus(channelId))
  }, [dispatch, channelId])

  const channelDetails = useSelector(state => state.channelDetails)
  const subscriptionStatus = useSelector(state => state.channelDetails.subscriptionStatus)
  return (
    <div className="videoMetaData">
      <div className="videoMetaData__top">
        <h4>{title}</h4>
        <div className="videoMetaData__top__details">
          <div className="videoMetaData__top__details__left">
            <span>{numeral(viewCount).format("0.a")} views • {moment(publishedAt).fromNow()}</span>
          </div>
          <div className="videoMetaData__top__details__right">
            <span>
              <MdThumbUp size={22}/>
              <p>{numeral(likeCount).format("0.a")}</p>              
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__description">
        <div className="videoMetaData__description__left">
          <img 
            src={channelDetails?.channel?.snippet?.thumbnails?.default?.url}
            alt="channal_icon"
          />
        </div>
        <div className="videoMetaData__description__right">
          <div className="channel">
            <div className="channel__left">
              <span>{channelTitle}</span>
              <p>{numeral(channelDetails?.channel?.statistics?.subscriberCount).format("0.a")} subscribers</p>
            </div>
            <div className="channel__right">
              <button className={subscriptionStatus ? 'gray' : 'red'}>{subscriptionStatus ? "Subscribed" : "Subscribe"}</button>
            </div>
          </div>
          <div className="channel__bottom">
            <ShowMoreText
              lines={3}
              more="SHOW MORE"
              less="SHOW LESS"
              className="showMoreText"
              anchorClass="my-anchor-css-class"
              // onClick={this.executeOnClick}
              expanded={false}
              // width="100%"
              truncatedEndingComponent={"... "}
            >
              {description}
            </ShowMoreText>
          </div>

        </div>
      </div>
    </div>
  )
}

export default VideoMetaData