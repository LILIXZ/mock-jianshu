import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { Redirect } from 'react-router-dom';
import { actionCreators } from '../login/store';

class Login extends Component{
    render(){
        const { loginStatus } = this.props;
        if( !loginStatus ){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="Username" ref={(input) => { this.account = input }}/>
                        <Input placeholder="Password" type="password" ref={(input) => { this.password = input }} />
                        <Button onClick = {() => this.props.login(this.account, this.password)}>Login</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = (state) => {
    return{
        loginStatus: state.getIn(['login','login']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login(accountElem, passwordElem){
            dispatch(actionCreators.login(accountElem.value, passwordElem.value));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);