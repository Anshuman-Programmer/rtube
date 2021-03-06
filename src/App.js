import { useEffect, useState } from "react";
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import "./_app.scss"
import { Routes, Route, Navigate, useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import SearchScreen from "./screens/searchScreen/SearchScreen";
import SubscriptionScreen from "./screens/subscriptionScreen/SubscriptionScreen";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";

const Layout = ({children}) => {
  
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar(prev => !prev)

  return (
    <>
     <Header handleToggleSidebar={handleToggleSidebar}/>
     <div className="app__container">
       <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
       <section className="app__main">
        {children}
       </section>
     </div>
    </>
  )
}

function App() {

  const {accessToken, loading} = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    if(!loading && !accessToken){
      navigate("/auth")
    }
  }, [accessToken, loading, navigate])
  

  
  
  return (
      <Routes>
        <Route path="/" element={ 
          <Layout>
            <HomeScreen/>
          </Layout> 
        } />
        <Route path="/search/:query" element={ 
          <Layout>
            <SearchScreen/>
          </Layout> 
        } />
        <Route path="/watch/:id" element={ 
          <Layout>
            <WatchScreen/>
          </Layout> 
        } />
        <Route path="/channel/:channelId" element={ 
          <Layout>
            <ChannelScreen/>
          </Layout> 
        } />
        <Route path="/feed/subscriptions" element={ 
          <Layout>
            <SubscriptionScreen/>
          </Layout> 
        } />
        <Route path="/auth" element={<LoginScreen/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
  )
}

export default App;
