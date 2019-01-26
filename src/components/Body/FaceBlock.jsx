import React, { Fragment } from 'react';
import drinkImg from './img/drink.jpg';
import Parallax from 'react-springy-parallax'


class FaceBlock extends React.Component {

    render() {
        return (
            <Fragment>
                <Parallax ref='parallax' pages={3}>
                    <Parallax.Layer
                        offset={0}
                        speed={0}>
                        <div className="face-image"></div>
                    </Parallax.Layer>
                    <Parallax.Layer
                        offset={0}
                        speed={0.5}>
                        <h1 style={{color: 'white', marginTop: '300px'}}>fgdfgd fgdfg dfgg</h1>
                    </Parallax.Layer>

                </Parallax>
                

            </Fragment>
        )
    }
}

export default FaceBlock