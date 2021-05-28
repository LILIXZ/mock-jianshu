import {CHANGE_FOCUS_VALUE, CHANGE_BLUR_VALUE, CHANGE_LIST_VALUE, MOUSE_ENTER, MOUSE_LEAVE, SWITCH_PAGE} from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: CHANGE_LIST_VALUE,
    // to make list become immutable list
    data: fromJS(data),
    totalPage: Math.ceil(fromJS(data.length / 10))
})

// return a object
export const searchFocus = () => ({
    type: CHANGE_FOCUS_VALUE,
    value: true
});
export const searchBlur = () => ({
    type: CHANGE_BLUR_VALUE,
    value: false
});

// return a function
export const getList = () => {
    return (dispatch) =>{
        axios.get('/api/headerList.json').then((res)=>{
            dispatch(changeList(res.data.data));
        }).catch(() =>{
            console.log('error');
        })
    }
};

export const mouseEnter = () => ({
    type: MOUSE_ENTER,
    value: true
});

export const mouseLeave = () => ({
    type: MOUSE_LEAVE,
    value: false
});

export const switchPage = (page) => ({
    type: SWITCH_PAGE,
    page
});