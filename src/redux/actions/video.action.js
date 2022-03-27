
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SELECTED_VIDEO_FAILED, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionTypes"

import {request} from "../../api"

export const getPopularVideo = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: HOME_VIDEOS_REQUEST
        })
        
        const { data } = await request("/videos", {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: "mostPopular",
                regionCode: "IN",
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken
            }
        })
        
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: "All"
            }
        })

    } catch (error) {
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message
        })
    }
}

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {

        dispatch({
            type: HOME_VIDEOS_REQUEST
        })
        
        const { data } = await request("/search", {
            params: {
                part: 'snippet',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                q: keyword,
                type: "video"
            }
        })
        
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword
            }
        })

    } catch (error) {
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message
        })
    }
}

export const getVideoById = (id) => async dispatch => {
    try {

        dispatch({
            type: SELECTED_VIDEO_REQUEST
        })

        const { data } = await request("/videos",{
            params:{
                part: "snippet,statistics",
                id: id
            }
        })

        dispatch({
            type: SELECTED_VIDEO_SUCCESS,
            payload: data.items[0]
        })
        
    } catch (error) {

        dispatch({
            type: SELECTED_VIDEO_FAILED,
            payload: error.message
        })
        
    }
}

export const getRelatedVideo = (id) => async dispatch => {
    try {

        dispatch({
            type: RELATED_VIDEO_REQUEST
        })

        const { data } = await request("/search",{
            params:{
                part: "snippet",
                relatedToVideoId: id,
                maxResults: 15,
                type: "video"
            }
        })

        dispatch({
            type: RELATED_VIDEO_SUCCESS,
            payload: data.items
        })
        
    } catch (error) {

        dispatch({
            type: RELATED_VIDEO_FAIL,
            payload: error.message
        })
        
    }
}