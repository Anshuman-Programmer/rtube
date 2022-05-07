
import "./_header.scss"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from 'react-icons/md'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = ({handleToggleSidebar}) => {


  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const { user } = useSelector(state => state.auth)

  const onSubmit = (e) => {

    e.preventDefault()

    navigate(`search/${input}`)

  }

  return (
    <div className="header">
      <div>
        <GiHamburgerMenu className="header__menu" size={24} onClick={()=> handleToggleSidebar()}/>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
          alt="logo"
          className="header__logo"
        />
      </div>
      
      <form>
        <input onSubmit={onSubmit} type="text" placeholder="Search" value={input} onChange={ e => setInput(e.target.value)}/>
        <button type="submit" onClick={onSubmit}>
          <AiOutlineSearch size={26} style={{
            color: "#fff"
          }}/>
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img
          src={user?.photoURL}
          alt="avater"
          className="header__icons__avater"
        />
      </div>
    </div>
  )
}

export default Header