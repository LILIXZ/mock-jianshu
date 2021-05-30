import { CHANGE_TOPICS, CHANGE_RECOMMENDS, CHANGE_ARTICLES, LOAD_MORE_ARTICLES, UPDATE_SHOW_JUMP_TOP } from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeTopics = (data) => ({
    type: CHANGE_TOPICS,
    data: fromJS(data)
})

const changeArticles = (data) => ({
    type: CHANGE_ARTICLES,
    data: fromJS(data)
})

const changeRecommends = (data) => ({
    type: CHANGE_RECOMMENDS,
    data: fromJS(data)
})

const loadMoreArticles = (data) => ({
    type: LOAD_MORE_ARTICLES,
    data: fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) =>{
            dispatch(changeTopics(res.data.topicList));
            dispatch(changeArticles(res.data.articleList));
            dispatch(changeRecommends(res.data.recommendList));
        }).catch(() =>{
            console.log('error');
        })
    }
}

export const getReadMoreData = () => {
    return(dispatch) => {
        axios.get('/api/moreArticles.json').then((res) =>{
            dispatch(loadMoreArticles(res.data.articleList));
        }).catch(() =>{
            console.log('error');
        })
    }
}

export const setShowJumpUp = (showFlag) => ({
    type: UPDATE_SHOW_JUMP_TOP,
    showFlag
})