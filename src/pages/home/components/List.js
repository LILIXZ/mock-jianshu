import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {ArticleItem, ArticleInfo, Readmore} from '../style';
import {actionCreators} from '../../home/store';

class List extends Component{
    render(){
        const {list, handleReadMoreOnClick} = this.props;
        return(
            <div>
                {
                    list.map((item) => {
                        return (
                            <Link key={item.get('id')} to={'./detail/' + item.get('id')}>
                                <ArticleItem>
                                    <ArticleInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ArticleInfo>
                                    <img className="article-pic" src={item.get('imgUrl')} alt={item.get('title')}/>
                                </ArticleItem>
                            </Link>
                        )
                    })
                }
                
                <Readmore onClick = { handleReadMoreOnClick }>Read more</Readmore>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        list: state.getIn(['home', 'articleList'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleReadMoreOnClick(){
            dispatch(actionCreators.getReadMoreData());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);