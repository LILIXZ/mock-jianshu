import { fromJS } from 'immutable';
import { CHANGE_DETAIL_TITLE, CHANGE_DETAIL_ARTICLE } from './actionTypes';

const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_DETAIL_TITLE:
            return state.set('title', action.data);
        case CHANGE_DETAIL_ARTICLE:
            return state.set('content', action.data);
        default:
            return state;
    }
}