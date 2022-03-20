
import "./_comment.scss"

const Comment = () => {
  return (
    <div className="comments__section"> 
        <div className="comments__section__single">
          <div className="comments__section__single__left">
            <img src="https://cdn.dribbble.com/users/1346761/screenshots/7041513/media/dee97a1b0d22229724cc6022675151b2.png?compress=1&resize=400x300&vertical=top" alt="channal_icon"/>
          </div>
          <div className="comments__section__single__right">
            <p className="comments__section__single__right__top">keshav <span>2 weeks ago</span></p>
            <p className="comments__section__single__right__bottom">
              absolutely amazing .... I have taken quiet a few udemy courses and can tell nothing comes near this on NEXT js react or frontend in general. keep up the great work. what ever goals you have with this channel best wishes on that !!
            </p>
          </div>
        </div>
      </div>
  )
}

export default Comment