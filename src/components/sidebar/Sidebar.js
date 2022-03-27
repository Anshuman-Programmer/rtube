
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
import { useNavigate } from "react-router-dom"

const Sidebar = ({sidebar, handleToggleSidebar}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/auth")
  }

  return (
    <nav className={sidebar ? "sidebar open" : "sidebar"} onClick={() => handleToggleSidebar()}>
      <li  onClick={()=> navigate("/")}>
        <MdHome size={22}/>
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={22}/>
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={22}/>
        <span>Liked videos</span>
      </li>
      <li>
        <MdHistory size={22}/>
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={22}/>
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={22}/>
        <span>I don't know</span>
      </li>
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