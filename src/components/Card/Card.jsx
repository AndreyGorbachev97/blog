import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MiniCard from './MiniCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {requestOnePost, requestPosts} from '../../actions/index';


class Card extends React.Component {

    componentWillMount = () => { 
        this.props.requestPosts()
        this.props.requestOnePost(this.props.match.params.id)
    }

    render() {
        const drinks = this.props.drinks || [];
        const post = drinks.post || {};
        const posts = drinks.list || [];
        return (
            <div style={{width: '100%', margin: '5% 0% 5% 0'}}>
                 <Grid container>
                    <Grid item xs={1} xl={1} sm={1}/>
                    <Grid item xs={12} xl={12} sm={12}  md={12} lg={7}>
                            <Paper style={{ margin: '10px'}} elevation={3}>
                                <img                    
                                    style={{objectFit: 'cover', maxHeight: '700px'}}
                                    width= '100%'

                                    
                                    src={`/img${post.image}.jpg`} 
                                />
                                <div style={{margin: '2% 2% 0% 4%', padding: '0% 0% 5% 0%'}}>
                                    <div className= 'title_text'>{post.title}</div>
                                    <div className= 'base_text'>{post.text}</div>
                                </div>
                                
                            </Paper>
                    </Grid>
                    <Grid item xs={12} xl={12} sm={12} md={12} lg={4}>
                        <div style={{minHeight:'600px', margin: '10px'}}>
                            <div className= 'title_text'>Еще статьи</div>
                            {posts.map(drink => {
                                return (
                                    <MiniCard
                                        key = {drink._id}
                                        post = {drink}
                                        requestOnePost = {this.props.requestOnePost}
                                    /> 
                                )
                            })}    
                        </div>
                    </Grid>
                 </Grid>
               
            </div>
        )
    }
}

export default connect(
    state => ({
        drinks: state.drinks
    }),
    dispatch => bindActionCreators({
        requestOnePost: requestOnePost,
        requestPosts: requestPosts
    }, dispatch)
)(Card)