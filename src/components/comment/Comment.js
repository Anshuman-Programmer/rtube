
import moment from "moment"
import "./_comment.scss"

const Comment = ({comment}) => {

  const {authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay} = comment

  return (
    <div className="comments__section"> 
        <div className="comments__section__single">
          <div className="comments__section__single__left">
            <img src={authorProfileImageUrl}/>
          </div>
          <div className="comments__section__single__right">
            <p className="comments__section__single__right__top">{authorDisplayName} <span>{moment(publishedAt).fromNow()}</span></p>
            <p className="comments__section__single__right__bottom">
              {textDisplay}
            </p>
          </div>
        </div>
      </div>
  )
}

export default Comment