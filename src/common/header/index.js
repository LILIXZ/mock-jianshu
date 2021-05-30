import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem, SettingIcon, PencilIcon, SearchIcon, RefreshIcon } from './style';
import { actionCreators } from '../header/store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';

class Header extends Component{
    render(){
        const {focused, list, page, totalPage, mouseIn, login, handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave, handleSwitchPage, handleLogout } = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download App</NavItem>
                    {
                        login ? 
                        <NavItem className='right' onClick={handleLogout}>Logout</NavItem> : 
                        <Link to='/login'><NavItem className='right'>Login</NavItem></Link>
                    }
                    <NavItem className='right'><SettingIcon /></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in = {focused}
                            timeout = {200}
                            classNames = "slide"
                        >
                            <NavSearch 
                                className = {focused ? 'focused' : ''}
                                onFocus = {() => handleInputFocus(list)}
                                onBlur = {handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <SearchIcon />
                        <SearchInfo
                            className = {focused || mouseIn ? 'focused' : ''}
                            onMouseEnter = {handleMouseEnter}
                            onMouseLeave = {handleMouseLeave}>
                            <SearchInfoTitle>
                                Trending
                                <SearchInfoSwitch onClick = {() => handleSwitchPage(page, totalPage, this.refershIcon)}>
                                    <RefreshIcon ref={(icon) => {this.refershIcon = icon}} /> Switch
                                </SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                                {
                                    list.toJS().slice((page - 1) * 10, page * 10).map((item) =>{
                                        return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                    })
                                }
                            </SearchInfoList>
                        </SearchInfo>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'><PencilIcon />    Write</Button>
                    <Button className='reg'>Sign Up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        // focused: state.header.focused
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(list){
            (list.size === 0 ) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleSwitchPage(page, totalPage, refreshIcon){
            let originalDegree = refreshIcon.style.transform.replace(/[^0-9]/ig, '');
            if(originalDegree){
                refreshIcon.style.transform = 'rotate('+ parseInt(originalDegree, 10) + 360 +'deg)';
            }else{
                refreshIcon.style.transform = 'rotate(360deg)';
            }
            if (page < totalPage){
                dispatch(actionCreators.switchPage(page + 1));
            }else{
                dispatch(actionCreators.switchPage(1));
            }
        },
        handleLogout(){
            dispatch(loginActionCreators.changeLoginStatus(false));
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Header);