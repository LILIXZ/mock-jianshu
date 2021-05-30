import { CHANGE_TOPICS, CHANGE_RECOMMENDS, CHANGE_ARTICLES, LOAD_MORE_ARTICLES, UPDATE_SHOW_JUMP_TOP } from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList:[],
    articleList: [],
    recommendList: [],
    showJumpUp: false
});

export default (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_TOPICS:
            return state.set('topicList', action.data);
        case CHANGE_RECOMMENDS:
            return state.set('recommendList', action.data);
        case CHANGE_ARTICLES:
            return state.set('articleList', action.data);
        case LOAD_MORE_ARTICLES:
            return state.set('articleList', state.get('articleList').concat(action.data));
        case UPDATE_SHOW_JUMP_TOP:
            return state.set('showJumpUp', action.showFlag);
        default:
            return state;
    }
}