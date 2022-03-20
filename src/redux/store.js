
import { createStore, applyMiddleware, combineReducers } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

import { authReducer } from "./reducers/auth.reducer"
import { homeVideosReducer } from "./reducers/video.reducer"

// const initialState = {
//     name: "Anshuman",
//     age: 19
// }

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store