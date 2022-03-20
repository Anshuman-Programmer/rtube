
import { useDispatch, useSelector } from "react-redux"
import "./_loginScreen.scss"
import {login} from "../../redux/actions/auth.action"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const LoginScreen = () => {

  const dispatch = useDispatch()

  const accessToken = useSelector( state => state.auth.accessToken)

  const navigate = useNavigate()

  useEffect(() => {

    if(accessToken){
      navigate(('/'))
    }
    
  }, [accessToken, navigate])
  

  const handleLogin = () => {

    dispatch(login())

  }

  return (
    <div className="login">
        <div className="login__container">
            <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"/>
            <button onClick={handleLogin}>Login with Google</button>
            <p>A Youtube clone project by Anshuman Talukdar</p>
        </div>
    </div>
  )
}

export default LoginScreen