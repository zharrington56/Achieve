import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const drawerWidth = 240;
const styles = theme => ({
    appBar: {
        position: 'fixed',
        marginLeft: drawerWidth,
    },
    toolbar:  {     // theme.mixins.toolbar
        minHeight: '224px'
    },
    h1: {
        fontSize: '72px',
    },
});

class TopPanel extends React.Component {
    state = {

    };

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <h1 className={classes.h1}>Welcome</h1>
                </Toolbar>
            </AppBar>
        );
    }
}

TopPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopPanel);