
import "./_sidebar.scss"

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied
} from 'react-icons/md'
import { useDispatch } from "react-redux"
import { logout } from "../../redux/actions/auth.action"
import { Link, useNavigate } from "react-router-dom"

const Sidebar = ({sidebar, handleToggleSidebar}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/auth")
  }

  return (
    <nav className={sidebar ? "sidebar open" : "sidebar"} onClick={() => handleToggleSidebar()}>

      <Link to="/">
        <li>
          <MdHome size={22}/>
          <span>Home</span>
        </li>
      </Link>

      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={22}/>
          <span>Subscriptions</span>
        </li>
      </Link>
      
      <Link to="/">
        <li>
          <MdThumbUp size={22}/>
          <span>Liked videos</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <MdHistory size={22}/>
          <span>History</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <MdLibraryBooks size={22}/>
          <span>Library</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <MdSentimentDissatisfied size={22}/>
          <span>I don't know</span>
        </li>
      </Link>
      <hr/>
        <li onClick={handleLogout}>
          <MdExitToApp size={22}/>
          <span>Log Out</span>
        </li>
      
      <hr/>
    </nav>
  )
}

export default Sidebar