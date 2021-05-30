import axios from 'axios';
import { fromJS } from 'immutable';
import { CHANGE_DETAIL_TITLE, CHANGE_DETAIL_ARTICLE } from './actionTypes';

const changeDetailTitle = (data) => ({
    type: CHANGE_DETAIL_TITLE,
    data: fromJS(data)
})

const changeDetailArticles = (data) => ({
    type: CHANGE_DETAIL_ARTICLE,
    data: fromJS(data)
})

export const getList = (id) => {
    return (dispatch) => {
        axios.get('/api/detailList.json?id='+id).then((res) =>{
            dispatch(changeDetailTitle(res.data.articleList[0].title));
            dispatch(changeDetailArticles(res.data.articleList[0].content));
        }).catch(() =>{
            console.log('error');
        })
    }
}