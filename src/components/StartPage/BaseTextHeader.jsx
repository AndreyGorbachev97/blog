import { Fragment } from "react";
import React, { Component } from 'react';
import {scrollToCards} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; 

class BaseTextHeader extends React.Component {

    
    render() {
        return (
            <Fragment>
                <div className="Base-text">
                    <span style={{maxWidth: '80%', fontSize: '45px'}}>РЕЦЕПТ ЛЮБИМОГО НАПИТКА.</span>   
                    <span style={{maxWidth: '80%', fontSize: '30px'}}>это очень просто.</span>                  
                    <button className='Base-button'
                     onClick={() => this.props.scrollToCards({scroll: 1})}>
                        Смотреть
                    </button>
                </div>
            </Fragment>
        );
    }
}


export default connect(
    state => ({...state}),
    dispatch => bindActionCreators(
        {
            scrollToCards: scrollToCards,
        }, dispatch)
)(BaseTextHeader)