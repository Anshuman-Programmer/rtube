
import "./_searchVideo.scss"
import moment from "moment"
import { useEffect, useState } from "react"
import { request } from "../../api"
import { useNavigate } from "react-router-dom"
import numeral from "numeral"

const SearchVideo = ({video}) => {

    const { id: {
        kind,
        videoId
    }, 
        snippet : {
            title,
            channelTitle,
            description,
            publishedAt,
            thumbnails,
            channelId
        }
    } = video

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

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
           setChannelIcon(items[0].snippet.thumbnails.default.url)
        }
        get_channel_icon()
    }, [channelId])

    useEffect(() => {
        const get_video_details = async () => {
           const {
              data: { items },
           } = await request('/videos', {
              params: {
                 part: 'contentDetails,statistics',
                 id: videoId,
              },
           })
           setDuration(items[0].contentDetails.duration)
           setViews(items[0].statistics.viewCount)
        }
        get_video_details()
     }, [videoId])

    const isVideo = kind === "youtube#video"
    const navigate = useNavigate()

    const handleSearchClick = (e) => {
        e.preventDefault();

        if(isVideo){
            navigate(`/watch/${videoId}`)
        }else{
            navigate(`/channel/${channelId}`)
        }

        
    }

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

  return (
    <div className="searchVideo">
        <div className="searchVideo__left" onClick={handleSearchClick}>
            {/* {isVideo} */}
            {isVideo && <img alt="thumbnail" src={thumbnails?.medium?.url} className='thumbnail'/>}
            {!isVideo && <div className="searchVideo__left__channel">
                <img alt="thumbnail" src={thumbnails?.medium?.url} className="channelIcon"/>
            </div>}
            {isVideo && <span>{_duration}</span>}
        </div>
        <div className="searchVideo__right">
            <h4 className="searchVideo__right__heading"  onClick={handleSearchClick}>
                {title}
            </h4>
            {isVideo && <span>{numeral(views).format("0.a")} views • {moment(publishedAt).fromNow()}</span>}
            <div className="searchVideo__right__channel"onClick={(e)=> {
                e.preventDefault();
                navigate(`/channel/${channelId}`)
            }}>
                {isVideo && <img src={channelIcon} alt="chennel"/>}
                {isVideo && <span>{channelTitle}</span>}
            </div>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default SearchVideo