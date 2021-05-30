import { CHANGE_LOGIN_STATUS } from './actionTypes';
import axios from 'axios';

export const changeLoginStatus = (status) => ({
    type: CHANGE_LOGIN_STATUS,
    data: status
})

export const login = (account, password) => {
    return(dispatch) => {
        axios.get('/api/login.json').then((res) => {
            if(res.data.data){
                dispatch(changeLoginStatus(res.data.data));
            }else{
                alert("login failed.");
            }
        }).catch(() => {
            console.log("error");
        })

    }
}