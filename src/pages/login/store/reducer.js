import { CHANGE_LOGIN_STATUS } from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    login: false
});

export default (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_LOGIN_STATUS:
            return state.set('login', action.data);
        default:
            return state;
    }
}