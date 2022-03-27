
import moment from "moment"
import { useEffect, useState } from "react"
import "./_video.scss"
import { request } from "../../api"
import numeral from "numeral"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from "react-router-dom"

const Video = ({video}) => {

   const {
      id,
      snippet: {
         channelId,
         channelTitle,
         title,
         publishedAt,
         thumbnails: { medium },
      },
      contentDetails,
   } = video

   const [views, setViews] = useState(null)
   const [duration, setDuration] = useState(null)
   const [channelIcon, setChannelIcon] = useState(null)

   const seconds = moment.duration(duration).asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')

   const _videoId = id?.videoId || contentDetails?.videoId || id

   useEffect(() => {
      const get_video_details = async () => {
         const {
            data: { items },
         } = await request('/videos', {
            params: {
               part: 'contentDetails,statistics',
               id: _videoId,
            },
         })
         setDuration(items[0].contentDetails.duration)
         setViews(items[0].statistics.viewCount)
      }
      get_video_details()
   }, [_videoId])

   useEffect(() => {
   const get_channel_icon = async () => {
      const {
         data: { items },
      } = await request('/channels', {
         params: {
            part: 'snippet',
            id: channelId,
         },
      })
      setChannelIcon(items[0].snippet.thumbnails.default)
   }
   get_channel_icon()
   }, [channelId])

   const navigate = useNavigate()

   const handleVideoClick = () => {

      navigate(`/watch/${_videoId}`)

   }

   return (
      <div className="video" onClick={handleVideoClick}>
         <div className="video__top">
         {/* <img src={medium.url} alt="thumbnail"/> */}
         <LazyLoadImage
               alt={"thumbnail"}
               effect="blur"
               src={medium.url} 
               
            />
         <span className="video__duration">{_duration}</span>
         </div>
         <div className="video__bottom">
         <div className="video__bottom__left">
            {/* <img className="channel__img" src={channelIcon?.url} alt="avater"/> */}
            <LazyLoadImage
               alt={"ChannelIcon"}
               effect="blur"
               src={channelIcon?.url} 
            />
         </div>
         <div className="video__bottom__right">
            <h3 className="video__title">{title}</h3>
            <p className="channel__name">{channelTitle}</p>
            <p className="video__views">{numeral(views).format("0.a")} views • {moment(publishedAt).fromNow()}</p>
         </div> 
         </div>
      </div>
   )
}

export default Video