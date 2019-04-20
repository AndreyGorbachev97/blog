import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

class ListCards extends React.Component {

    render() {
        const drinks = this.props.drinks.list || [];

        return (
            <Fragment>
                <div style={{ padding: '6%' }}>
                    <Grid container spacing={24}>
                        {drinks.map(drink => {
                            return (
                                <Grid item xs={12} sm={3} key={drink._id}>
                                    <Card 
                                        style={{minHeight: '250px', maxHeight: '250px'}} 
                                        raised                          
                                    > 
                                        <CardActionArea
                                            component = {Link}
                                            to = {`card/${drink._id}`}
                                        >
                                            <CardMedia
                                                style={{objectFit: 'cover'}}
                                                component="img"
                                                height='150'
                                                image={`/img${drink.image}.jpg`} 
                                                title={drink.title}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {drink.title}
                                                </Typography>
                                                <Typography component="p">
                                                    {drink.mini_text}
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

export default connect(
    state => ({
        drinks: state.drinks
    })
)(ListCards)