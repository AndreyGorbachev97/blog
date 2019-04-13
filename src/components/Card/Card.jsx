import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MiniCard from './MiniCard';


class Card extends React.Component {

    
    render() {
        
        return (
            <div style={{width: '100%', margin: '5% 0% 5% 0'}}>
                 <Grid container>
                    <Grid item xs={1} xl={1} sm={1}/>
                    <Grid item xs={12} xl={12} sm={12}  md={12} lg={7}>
                            <Paper style={{ margin: '10px'}} elevation={3}>
                                <img                    
                                    style={{objectFit: 'cover',}}
                                    width= '100%'
                                    
                                    src='/Wine.jpg'
                                />
                                <div style={{margin: '2% 2% 0% 4%', padding: '0% 0% 5% 0%'}}>
                                    <div className= 'title_text'>Red Wine</div>
                                    <div className= 'base_text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, error. Optio voluptatum suscipit, dignissimos inventore totam voluptatem enim doloremque magnam fugit maiores fugiat!</div>
                                </div>
                                
                            </Paper>
                    </Grid>
                    <Grid item xs={12} xl={12} sm={12} md={12} lg={4}>
                        <div style={{minHeight:'600px', margin: '10px'}}>
                            <div className= 'title_text'>Еще статьи</div>
                            <MiniCard/>
                            <MiniCard/>
                            <MiniCard/>
                            <MiniCard/>
                            <MiniCard/>
                                         
                        </div>
                    </Grid>
                 </Grid>
               
            </div>
        )
    }
}

export default Card