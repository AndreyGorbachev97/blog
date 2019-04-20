import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const styles = {
  root: {
    flexGrow: 1,
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#fb8c00'}}>
        <Toolbar >
            <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
              blog
            </Typography>
            <Button
              color="inherit"
              component={Link}
              to='/'
            >на главную</Button>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);