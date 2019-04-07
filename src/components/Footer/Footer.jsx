import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

function BottomAppBar(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div style={{backgroundColor: '#fb8c00', height: '4em'}}>sdsd</div>
    </Fragment>
  );
}

export default withStyles(styles)(BottomAppBar);