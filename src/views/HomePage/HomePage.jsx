import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Menu from '../../components/Menu/Menu';
import Background from '../../images/profile2.jpg';

const styles = theme => ({
  content: {
    position: 'fixed',
    top: '224px',
    right: '0px',
    bottom: '0px',
    left: '224px',
  },
  image: {
    display: 'block',
    width: '100%',
    height: '100%',
  }
})

class HomePage extends Component {

  render () {
  const { classes } = this.props
  return (
    <div>
        <Menu />
        <div className={classes.content}>
          <img src={ Background } className={classes.image} />
        </div>
    </div>
  );
  }
} 

export default withStyles(styles)(HomePage);