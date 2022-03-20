
import "./_videoMetaData.scss"
import moment from "moment"
import numeral from "numeral"
import {MdThumbUp, MdThumbDown} from "react-icons/md"
import ShowMoreText from "react-show-more-text";

const VideoMetaData = () => {
  return (
    <div className="videoMetaData">
      <div className="videoMetaData__top">
        <h4>Let's build LinkedIn with NEXT.JS 12.0! (Middleware, Tailwind CSS, MongoDB, NextAuth, Recoil) 🔥🚀</h4>
        <div className="videoMetaData__top__details">
          <div className="videoMetaData__top__details__left">
            <span>{numeral(100000).format("0.a")} views • {moment("2020-06-06").fromNow()}</span>
          </div>
          <div className="videoMetaData__top__details__right">
            <span>
              <MdThumbUp size={22}/>
            </span>
            <span>
              <MdThumbDown size={22}/>
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__description">
        <div className="videoMetaData__description__left">
          <img src="https://cdn.dribbble.com/users/1346761/screenshots/7041513/media/dee97a1b0d22229724cc6022675151b2.png?compress=1&resize=400x300&vertical=top" alt="channal_icon"/>
        </div>
        <div className="videoMetaData__description__right">
          <div className="channel">
            <div className="channel__left">
              <span>ILW Yennefer</span>
              <p>7.57K subscribers</p>
            </div>
            <div className="channel__right">
              <button>Subscribe</button>
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
            ✨ Framer Motion Animated Modals using Fireship's awesome 🔥:
              https://fireship.io/lessons/framer-mo...

              ❗Link to REPO: https://github.com/lukef7fywmrp/linke...

              ❤️ TIPS & DONATIONS LINK: https://paypal.me/ILWYennefer?locale....
              (It helps support the channel, thank you!!!)

              This build will have the following:
              👉 FRAMER MOTION (animated theme toggler)
              👉 TAILWIND CSS
              👉 NEXTJS (Middleware beta)
              👉 MONGODB
              👉 NEXTAUTH (MongoDB adapter ps Google Auth)
              👉 VERCEL HOSTING (How to deploy)
              👉 RECOIL (State management within React)
              + MORE!

              Connect with me on LinkedIn: https://www.linkedin.com/in/ali-mehdi...
              Follow me on Instagram: https://www.instagram.com/ilwyennefer/
              Join the community: https://discord.gg/m9aBsZhcAJ
              🔴 LIVE ON DISCORD DAILY AT 6AM - 7AM (Pacific Standard Time). Any questions or queries will be answered directly by me there!! 

              🕐 TIMESTAMPS (Credits - # Is -alh)
              0:00 Project Demo and Intro
              7:40 Tech Stack explained
              9:30 Initializing Project
              21:15 Working on Home Page Header
              57:04 Working on Home Page Main Content
              1:13:10 Implementing 'next-auth' authentication functionality
              1:50:00 Adding Middleware
              1:58:00 Adding 'Sign In' functionality
              2:09:20 Creating Main Page Header
              2:34:00 Implementing Dark Mode
              2:50:23 Adding Framer Motion animated Toggle
              2:59:10 Adding Toggle Theme functionality
              3:10:00 Adding Sidebar
              3:48:00 Fetching Userdata from Session
              4:04:44 Adding Feed Post Input
              4:21:42 Adding React Recoil
              4:31:08 Adding Modal
              4:45:19 Adding Form in Input
              5:02:35 Adding Post API routes
              5:22:35 POST request from front-end
              5:34:46 Fetch all posts from front-end
              5:42:09 Creating atom for posts variables
              5:43:46 Using SSR and re-fetching
              5:48:50 Using ServerSideProps to fetch posts from Database
              5:58:06 Rendering posts from Feed component
              6:11:04 Creating Post component
              6:29:47 Adding truncate on Post content
              6:37:18 Adding Full-Post Modal
              6:45:35 Adding extra icons on posts
              6:58:22 Adding TimeAgo functionality
              07:02:18 Adding delete post functionality
              07:07:20 Adding delete API route
              07:21:55 Adding widgets sidebar
              07:41:43 Adding Ads section
              07:49:15 Deploying the Project
            </ShowMoreText>
          </div>

        </div>
      </div>
    </div>
  )
}

export default VideoMetaData