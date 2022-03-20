
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

const SkeletonVideo = () => {
  return (
    <div style={{ width: '100%', margin: '1rem 0' }}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={140} />
            <div style={{display: "flex", width: "100%"}}>
                <Skeleton style={{ margin: "0.5rem"}} circle height={30} width={30}/>
                <Skeleton height={30} width={120} style={{ margin: "0.5rem"}}/>
            </div>
        </SkeletonTheme>
    </div>
  )
}

export default SkeletonVideo