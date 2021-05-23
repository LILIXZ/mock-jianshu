import {CHANGE_FOCUS_VALUE, CHANGE_BLUR_VALUE, CHANGE_LIST_VALUE, MOUSE_ENTER, MOUSE_LEAVE, SWITCH_PAGE} from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
});

export default (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_FOCUS_VALUE:
        case CHANGE_BLUR_VALUE:
            return state.set('focused', action.value);
        case CHANGE_LIST_VALUE:
            return state.set('list', action.data).set("totalPage", action.totalPage);
        case MOUSE_ENTER:
        case MOUSE_LEAVE:
            return state.set('mouseIn', action.value);
        case SWITCH_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}