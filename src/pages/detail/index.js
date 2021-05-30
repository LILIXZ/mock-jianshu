import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../detail/store';
import { DetailWrapper, Header, Content, DetailBackground } from './style';

class Detail extends Component{
    render(){
        const { title, content } = this.props;
        return(
            <DetailBackground>
                <DetailWrapper>
                    <Header>{ title }</Header>
                    <Content dangerouslySetInnerHTML={{__html: content}} />
                </DetailWrapper>
            </DetailBackground>
        )
    }

    componentDidMount(){
        this.props.changeDetailData(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => {
    return{
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeDetailData(id){
            dispatch(actionCreators.getList(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);