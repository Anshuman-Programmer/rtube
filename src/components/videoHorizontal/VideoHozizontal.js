
import "./_videoHorizontal.scss"
import numeral from "numeral";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const VideoHozizontal = ({video}) => {

  const {id, snippet: { chennelId, channelTitle, description, title, publishedAt, thumbnails}} = video

  const navigate = useNavigate()

  const handleRelatedVideoClick = () => {

    navigate(`/watch/${id.videoId}`)

  }

  return (
    <div className="videoHozizontal" onClick={handleRelatedVideoClick}>
      <div className="videoHozizontal__left">
        <img 
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
      </div>
      <div className="videoHozizontal__right">
        <h5 className="videoHozizontal__right__title">
          {title}
        </h5>
        <span className="videoHozizontal__right__chennel">{channelTitle}</span>
        <span className="videoHozizontal__right__chennel">{moment(publishedAt).fromNow()}</span> 
        {/* {numeral(121321).format("0.a")} views •  */}
      </div>
    </div>
  )
}

export default VideoHozizontal