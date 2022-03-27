import { useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import SearchVideo from "../../components/searchVideo/SearchVideo";
import { getVideosBySearch } from "../../redux/actions/video.action";
import "./_searchScreen.scss"

const SearchScreen = () => {
    const {query} = useParams();

    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getVideosBySearch(query))
    }, [dispatch, query])

    const { videos, loading } = useSelector(state => state.seachedVideos);

  return (
    <div className="searchScreen">
      {!loading ? (
        videos?.map(video => <SearchVideo video={video} key={video.id.videoId}/>)
      ) : (<SkeletonTheme>
        <Skeleton width={"100%"} height="130px" count={15}/>
      </SkeletonTheme>)}
    </div>
  )
}

export default SearchScreen