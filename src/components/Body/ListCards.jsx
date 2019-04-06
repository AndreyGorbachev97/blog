import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class ListCards extends React.Component {

    render() {
        let wine = [
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good wine5'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good wine'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good wine4'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good wine3'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good wine2'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good wine1 good wine1 good wine1 good wine1 good wine1 good wine1 good wine1 good wine1 мgood wine1 good wine1 good wine1 good wine1'
            },
        ]
        console.log(this.props.drinks)
        return (
            <Fragment>
                <div style={{ padding: '6%' }}>
                    <Grid container spacing={24}>
                        {wine.map(w => {
                            return (
                                <Grid item xs={12} sm={4} key={w.text}>
                                    <Card style={{minHeight: '200px'}} raised>
                                        <CardActionArea>
                                            <CardMedia
                                                style={{objectFit: 'cover'}}
                                                component="img"
                                                //className={classes.media}
                                                height='200'
                                                image='/Wine.jpg'
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {w.name}
                                                </Typography>
                                                <Typography component="p">
                                                    {w.text}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })}

                    </Grid>
                </div>
            </Fragment>
        )
    }
}

export default connect(state => ({
    drinks: state.drinks
}))(ListCards)