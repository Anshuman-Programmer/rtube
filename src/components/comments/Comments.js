
import Comment from "../comment/Comment"
import "./_comments.scss"

const Comments = () => {
  return (
    <div className="comments">
      <p className="comments__count">1231 Comments</p>
      <div className="comments__section"> 
        <div className="comments__section__single">
          <div className="comments__section__single__left">
            <img src="https://cdn.dribbble.com/users/1346761/screenshots/7041513/media/dee97a1b0d22229724cc6022675151b2.png?compress=1&resize=400x300&vertical=top" alt="channal_icon"/>
          </div>
          <form className="comments__section__single__form">
            <input type="text"/>
            <button>COMMENT</button>
          </form>
        </div>
      </div>
      {
        [...Array(10)].map(()=> <Comment/>)
      }
    </div>
  )
}

export default Comments