
import "./_header.scss"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from 'react-icons/md'
// import { useHistory } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const Header = ({handleToggleSidebar}) => {
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
        <input type="text" placeholder="Search"/>
        <button type="submit">
          <AiOutlineSearch size={26} style={{
            color: "#fff"
          }}/>
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img
          src="https://yt3.ggpht.com/yti/APfAmoET6bWXzZ2i0h1Y-GXPd3sLBYcE1tkUY2QA03UdEQ=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="avater"
          className="header__icons__avater"
        />
      </div>
    </div>
  )
}

export default Header