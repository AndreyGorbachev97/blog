import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

class MiniCard extends React.Component {
    
    render() { 
        const {post} = this.props
        return( 
            <Grid container className ='Card' >
                <Grid item xs={6} sm={5} 
                    component={Link}
                    to = {`${post._id}`}
                    onClick = {() => {this.props.requestOnePost(post._id)}}               
                >
                    <img                    
                        style={{objectFit: 'cover', borderRadius: '10px' ,border: '3px #ffcc80 solid'}}
                        height='100'
                        width='90%'
                        src={`/img${post.image}.jpg`}
                    />
                </Grid>
                <Grid item xs={6} sm={7}>
                    <Grid container>
                        <Grid item xs={12} sm={12} >
                            <span className= 'mini_title_text'>{post.title}</span>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                            <span className= 'base_text'>{post.mini_text}</span>
                        </Grid>
                    </Grid>       
                </Grid>
            </Grid> 
        )
    }
}

export default MiniCard