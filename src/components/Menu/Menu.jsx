import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TopPanel from '../TopPanel/TopPanel';
import LeftPanel from '../LeftPanel/LeftPanel';

const styles = theme => ({
    root: {
        display: 'flex',
    }
});

class Banner extends React.Component {
    state = {
        
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <TopPanel />
                <LeftPanel />
            </div>
        );
    }
}

Banner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);