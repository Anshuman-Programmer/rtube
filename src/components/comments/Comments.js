
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddComment, getCommentsOfVideoById } from "../../redux/actions/commnets.action"
import Comment from "../comment/Comment"
import numeral from "numeral"
import "./_comments.scss"

const Comments = ({videoId, totalComments}) => {

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getCommentsOfVideoById(videoId))
  }, [videoId, dispatch])

  const comments = useSelector(state => state.commentList.comments)
  const { photoURL } = useSelector(state => state.auth?.user)

  const [text, setText] = useState('')

  const _comments = comments.length > 0 ? comments?.map(comment => comment?.snippet?.topLevelComment?.snippet) : null

  const handleComment = e => {
     e.preventDefault()
     if (text.length === 0) return

     dispatch(AddComment(videoId, text))

     setText('')
  }
  

  return (
    <div className="comments">
      <p className="comments__count">{numeral(totalComments).format("0.a")} Comments</p>
      <div className="comments__section"> 
        <div className="comments__section__single">
          <div className="comments__section__single__left">
            <img src="https://cdn.dribbble.com/users/1346761/screenshots/7041513/media/dee97a1b0d22229724cc6022675151b2.png?compress=1&resize=400x300&vertical=top" alt="channal_icon"/>
          </div>
          <form className="comments__section__single__form">
            <input type="text"/>
            <button onClick={handleComment}>COMMENT</button>
          </form>
        </div>
      </div>
      {
        _comments ? (_comments?.map((comment, i)=> <Comment comment={comment} key={i}/>)) : null
      }
    </div>
  )
}

export default Comments