import { CHANGE_TOPICS, CHANGE_RECOMMENDS, CHANGE_ARTICLES } from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList:[],
    articleList: [],
    recommendList: []
});

export default (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_TOPICS:
            return state.set('topicList', action.data);
        case CHANGE_RECOMMENDS:
            return state.set('recommendList', action.data);
        case CHANGE_ARTICLES:
            return state.set('articleList', action.data);
        default:
            return state;
    }
}