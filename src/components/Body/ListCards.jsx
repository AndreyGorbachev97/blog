import React, { Fragment } from 'react';
import scrollToComponent from 'react-scroll-to-component'

class ListCards extends React.Component{

    render(){
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
                    <section className='test' ref={(section) => { this.test = section; }}>Violet</section>
                </div>
            </Fragment>
        )
    }
}

export default ListCards