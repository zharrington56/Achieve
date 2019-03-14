import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    center: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    button: {
        backgroundColor: theme.palette.primary.main
    }
})

class Rodeo extends Component {

  render () {
  const { classes } = this.props
  return (
    <div className={classes.center}>
        <Button className={classes.button}>
            generate your bull's name
        </Button>
    </div>
  );
  }
} 

export default withStyles(styles)(Rodeo);