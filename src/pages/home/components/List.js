import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ArticleItem, ArticleInfo} from '../style';

class List extends Component{
    render(){
        const {list} = this.props;
        return(
            list.map((item) => {
                    return (
                        <ArticleItem key={item.get('id')}>
                            <ArticleInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ArticleInfo>
                            <img className="article-pic" src={item.get('imgUrl')} alt={item.get('title')}/>
                        </ArticleItem>
                    )
                }
            )
        )
    }
}
const mapStateToProps = (state) => {
    return{
        list: state.getIn(['home', 'articleList'])
    }
}
export default connect(mapStateToProps, null)(List);