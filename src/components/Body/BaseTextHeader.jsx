import { Fragment } from "react";
import React, { Component } from 'react';
import {scrollToCards} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; 
import Header from '../Heder/Header';

class BaseTextHeader extends React.Component {

    render() {
        return (
            <Fragment>
                <Header />
                <div className="Base-text">
                    <h1>Узнай рецепт любого коктейля. Это будет длинный текст, нужна адоптация</h1>                   
                    <button className='Base-button' onFocus={()=>  this.props.scrollToCards({scroll: 0})}
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
    dispatch => bindActionCreators({scrollToCards: scrollToCards}, dispatch)
)(BaseTextHeader)