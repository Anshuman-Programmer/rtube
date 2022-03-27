
import "./_homeScreen.scss"
import CategoriesBar from "../../components/categoriesBar/CategoriesBar"
import Video from "../../components/video/Video"
import { useDispatch, useSelector } from "react-redux"
import { getPopularVideo, getVideosByCategory } from "../../redux/actions/video.action"
import { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../components/skeletons/SkeletonVideo"

const HomeScreen = () => {

  const {videos, activeCategory, loading} = useSelector(state => state.homeVideos)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPopularVideo())
  }, [dispatch])

  const fetchData = () => {
    if(activeCategory === "All"){
      dispatch(getPopularVideo())
    } else {
      dispatch(getVideosByCategory(activeCategory))
    }
  }
  
  return (
    <div className="home__screen">
      <CategoriesBar/>
      <InfiniteScroll
        dataLength={videos.length}
        // next={fetchData}
        hasMore={videos.length < 55 ? true : false}
        loader={<div className="home__screen__grid">{[...Array(20)].map(() => <SkeletonVideo/>)}</div>}
      >
        <div className="home__screen__grid">
          {!loading ? videos.map((video, i)=>(
            <Video key={i} video={video}/>
          )) : (           
            [...Array(24).map((a,i)=><SkeletonVideo key={(i)}/>)]
          )}
        </div>
      </InfiniteScroll>
      
      
    </div>
  )
}

export default HomeScreen