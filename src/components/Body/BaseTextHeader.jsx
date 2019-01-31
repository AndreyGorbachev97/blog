import { Fragment } from "react";
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

class BaseTextHeader extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="Base-text">
                    <h1>fgdfgd fgdfg dfgg</h1>
                    
                    <button className='Base-button'>
                        Смотреть
                    </button>
                </div>
            </Fragment>
        );
    }
}

export default BaseTextHeader