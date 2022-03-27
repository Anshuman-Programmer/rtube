
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPopularVideo, getVideosByCategory } from "../../redux/actions/video.action";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "Anshuman",
  "Rajnandini",
  "Dynamo Gaming",
  "Gaming",
  "react",
  "photoshop",
  "songs"
]

const CategoriesBar = () => {

  const [activeElement, setActiveElement] = useState("All")

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value)
    if(value === "All"){
      dispatch(getPopularVideo())
    } else {
      dispatch(getVideosByCategory(value))
    }
    
  }

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span className={activeElement === value ? "active" : ""} onClick={()=>handleClick(value)} key={i}>{value}</span>
      ))}
    </div>
  )
}

export default CategoriesBar