import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import {actionCreators} from '../home/store';
import bannerPic from '../../statics/Ted-Talks-Chris-Anderson.png';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';

class Home extends Component{
    render(){
        const { changeHomeData } = this.props;
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
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeHomeData(){
            dispatch(actionCreators.getList());
        }
    }
}
export default connect(null, mapDispatchToProps)(Home);