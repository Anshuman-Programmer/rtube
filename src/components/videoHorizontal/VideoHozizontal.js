
import "./_videoHorizontal.scss"
import numeral from "numeral";
import moment from "moment";

const VideoHozizontal = () => {
  return (
    <div className="videoHozizontal">
      <div className="videoHozizontal__left">
        <img 
          src="https://i.ytimg.com/vi/pfaSUYaSgRo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ1LU0f5_O04onDMeebgiK2ZONrA"
          alt="thumbnail"
        />
      </div>
      <div className="videoHozizontal__right">
        <h5 className="videoHozizontal__right__title">
          Ultimate Tailwind CSS Tutorial // Build a Discord-inspired Animated Navbar
        </h5>
        <span className="videoHozizontal__right__chennel">Fireship</span>
        <span className="videoHozizontal__right__chennel">{numeral(121321).format("0.a")} views • {moment("2022-01-03").fromNow()}</span>
      </div>
    </div>
  )
}

export default VideoHozizontal