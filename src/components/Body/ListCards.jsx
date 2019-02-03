import React, { Fragment } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {connect} from 'react-redux';

class ListCards extends React.Component{

    render(){
        console.log(this.props.drinks)
        return(
            <Fragment>
                <div className='list-cards'>
                    sdfds
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                </div>
            </Fragment>
        )
    }
}

export default connect(state => ({
    drinks: state.drinks
}))(ListCards)