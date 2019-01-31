import React, { Fragment } from 'react';
import drinkImg from './img/drink.jpg';
import BaseTextHeader from './BaseTextHeader';



class FaceBlock extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="face-image">
                    <BaseTextHeader/>
                </div>
            </Fragment>
        )
    }
}

export default FaceBlock