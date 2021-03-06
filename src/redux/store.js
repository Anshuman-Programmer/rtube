
import { createStore, applyMiddleware, combineReducers } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

import { authReducer } from "./reducers/auth.reducer"
import { channelVideoReducer } from "./reducers/channel.reducer"
import { commentListReducer } from "./reducers/commnets.reducer"
import { channelVideosReducer, homeVideosReducer, relatedVideoReducer, searchedVideosReducer, selectedVideoReducer, subcriptionChannelReducer } from "./reducers/video.reducer"

// const initialState = {
//     name: "Anshuman",
//     age: 19
// }

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelVideoReducer,
    commentList: commentListReducer,
    relatedVideos: relatedVideoReducer,
    seachedVideos: searchedVideosReducer,
    subscriptionChannel: subcriptionChannelReducer,
    channelVideos: channelVideosReducer,
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store