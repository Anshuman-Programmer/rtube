
import { useDispatch, useSelector } from "react-redux"
import "./_subscriptionScreen.scss"
import { getSubscriptionChannel } from "../../redux/actions/video.action";
import { useEffect } from "react";
import SearchVideo from "../../components/searchVideo/SearchVideo";

const SubscriptionScreen = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSubscriptionChannel())
  }, [dispatch])
  
  const {loading, channel} = useSelector(state => state.subscriptionChannel)

  return (
    <div className="subcriptionScreen">
      {!loading ? channel.map(video => <SearchVideo video={video} id={video.id}/>) : null}
    </div>
  )
}

export default SubscriptionScreen