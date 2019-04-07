import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
                text: 'good 8wine5'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good 58wine'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good2 wine4'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'go5od wine3'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good wi4ne2'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good wine12'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good wine23'
            },
            {
                name: 'red wine',
                color_wine: 'red',
                price: '1000',
                text: 'good wine1 good wine1 good wine1  good wine1 good wine1  good wine1 good wine1  good wine1 good wine1  good wine1 good wine1 good wine1 good wine1 good wine1 мgood wine1 good wine1 good wine1 good wine'
            },
        ]
        return (
            <Fragment>
                <div style={{ padding: '6%' }}>
                    <Grid container spacing={24}>
                        {wine.map(w => {
                            return (
                                <Grid item xs={12} sm={3} key={w.text}>
                                    <Card style={{minHeight: '250px', maxHeight: '250px'}} raised>
                                        <CardActionArea>
                                            <CardMedia
                                                style={{objectFit: 'cover'}}
                                                component="img"
                                                //className={classes.media}
                                                height='150'
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