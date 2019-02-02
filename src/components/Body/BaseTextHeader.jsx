import { Fragment } from "react";
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {scrollToCards} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; 


class BaseTextHeader extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="Base-text">
                    <h1>fgdfgd fgdfg dfgg</h1>
                    
                    <button className='Base-button' onClick={() => this.props.scrollToCards({scroll: 1})}>
                        Смотреть
                    </button>
                </div>
            </Fragment>
        );
    }
}


export default connect(
    state => ({...state}),
    dispatch => bindActionCreators({scrollToCards: scrollToCards}, dispatch)
)(BaseTextHeader)