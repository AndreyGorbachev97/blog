import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

class MiniCard extends React.Component {
    render() { 
        return( 
            <Grid container className ='Card' >
                <Grid item xs={6} sm={5} >
                    <img                    
                        style={{objectFit: 'cover', borderRadius: '10px' ,border: '3px #ffcc80 solid'}}
                        height='100'
                        width='90%'
                        src='/Wine.jpg'
                    />
                </Grid>
                <Grid item xs={6} sm={7}>
                    <span className= 'base_text'>Lorem ipsum dolor sit.</span>
                    <span className= 'base_text'>Lorem ipsum dolor sit.</span>
                    <span className= 'base_text'>Lorem ipsum dolor sit.</span>
                </Grid>
            </Grid> 
        )
    }
}

export default MiniCard