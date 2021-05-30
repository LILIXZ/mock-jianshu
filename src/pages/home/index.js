import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HomeWrapper, HomeLeft, HomeRight, JumpTop} from './style';
import {actionCreators} from '../home/store';
import bannerPic from '../../statics/Ted-Talks-Chris-Anderson.png';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';

class Home extends Component{
    render(){
        const { showJumpUp } = this.props;
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src={ bannerPic } />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                { showJumpUp ? <JumpTop onClick={ this.handleScrollUp }></JumpTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.props.changeShowJumpUp);
    }

    bindEvents(){
        window.addEventListener("scroll", this.props.changeShowJumpUp)
    }

    handleScrollUp(){
        console.log('click');
        window.scrollTo(0, 0);
    }
}

const mapStateToProps = (state) => {
    return{
        showJumpUp: state.getIn(['home', 'showJumpUp'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeHomeData(){
            dispatch(actionCreators.getList());
        },
        changeShowJumpUp(){
            if(document.documentElement.scrollTop > 100){
                dispatch(actionCreators.setShowJumpUp(true));
            }else{
                dispatch(actionCreators.setShowJumpUp(false));
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);