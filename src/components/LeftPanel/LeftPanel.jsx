import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Person';
import FamilyIcon from '@material-ui/icons/SupervisorAccount';
import ProjectsIcon from '@material-ui/icons/Code';
import ProfessionalIcon from '@material-ui/icons/Work';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExperienceIcon from '@material-ui/icons/PlaylistAddCheck';
import EducationIcon from '@material-ui/icons/School';
import AccomplishmentsIcon from '@material-ui/icons/Star';
import ResumeIcon from '@material-ui/icons/Description';
import ContactIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;
const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    corner: {
        minHeight: '224px',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.light,
    },
    text: {
        paddingLeft: theme.spacing.unit * 3
    },
    listItem: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }
    },
    icon: {
        marginRight: 0
    },
    nested: {
        paddingLeft: theme.spacing.unit * 8,
    }
});

class LeftPanel extends React.Component {
    state = {
        projects: false,
        professional: false,
    };

    handleProjects = () => {
        this.setState({ projects: !this.state.projects })
    }

    handleProfessional = () => {
        this.setState({ professional: !this.state.professional })
    }

    render() {
        const { classes } = this.props;
        return (
            <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
                <div className={classes.corner}>
                    <h1 className={classes.text}>Zach Harrington</h1>
                    <h4 className={classes.text}>Full Stack Developer</h4>
                </div>
                <List>
                    <ListItem button key={'Home'} classes={{  button: classes.listItem }}>
                        <ListItemIcon classes={{ root: classes.icon }}><HomeIcon /></ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <ListItem button key={'About'} classes={{  button: classes.listItem }}>
                        <ListItemIcon classes={{ root: classes.icon }}><AboutIcon /></ListItemIcon>
                        <ListItemText primary={'About'} />
                    </ListItem>
                    <ListItem button key={'Family'} classes={{  button: classes.listItem }}>
                        <ListItemIcon classes={{ root: classes.icon }}><FamilyIcon /></ListItemIcon>
                        <ListItemText primary={'Family'} />
                    </ListItem>
                    <ListItem button key={'Projects'} onClick={this.handleProjects} classes={{  button: classes.listItem }}>
                        <ListItemIcon classes={{ root: classes.icon }}><ProjectsIcon /></ListItemIcon>
                        <ListItemText primary={'Projects'} />
                        {this.state.projects ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.projects} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            <ListItem button key={'Achieve'} className={classes.nested} classes={{  button: classes.listItem }}>
                                <ListItemIcon classes={{ root: classes.icon }}><ExperienceIcon /></ListItemIcon>
                                <ListItemText inset primary='Achieve' />
                            </ListItem>
                            <Link to={'/rodeobullnamegenerator'}>
                                <ListItem button key={'eight'} className={classes.nested} classes={{  button: classes.listItem }}>
                                    <ListItemIcon classes={{ root: classes.icon }}><EducationIcon /></ListItemIcon>
                                    <ListItemText inset primary='8 seconds' />
                                </ListItem>
                            </Link>
                        </List>
                    </Collapse>
                    <ListItem button key={'Professional'} onClick={this.handleProfessional} classes={{  button: classes.listItem }}>
                        <ListItemIcon classes={{ root: classes.icon }}><ProfessionalIcon /></ListItemIcon>
                        <ListItemText primary={'Professional'} />
                        {this.state.professional ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.professional} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            <ListItem button key={'Experience'} className={classes.nested} classes={{  button: classes.listItem }}>
                                <ListItemIcon classes={{ root: classes.icon }}><ExperienceIcon /></ListItemIcon>
                                <ListItemText inset primary='Experience' />
                            </ListItem>
                            <ListItem button key={'Education'} className={classes.nested} classes={{  button: classes.listItem }}>
                                <ListItemIcon classes={{ root: classes.icon }}><EducationIcon /></ListItemIcon>
                                <ListItemText inset primary='Education' />
                            </ListItem>
                            <ListItem button key={'Accomplishments'} className={classes.nested} classes={{  button: classes.listItem }}>
                                <ListItemIcon classes={{ root: classes.icon }}><AccomplishmentsIcon /></ListItemIcon>
                                <ListItemText inset primary='Accomplishments' />
                            </ListItem>
                            <ListItem button key={'Resume'} className={classes.nested} classes={{  button: classes.listItem }}>
                                <ListItemIcon classes={{ root: classes.icon }}><ResumeIcon /></ListItemIcon>
                                <ListItemText inset primary='Resume' />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button key={'Contact'} classes={{  button: classes.listItem }}>
                        <ListItemIcon classes={{ root: classes.icon }}><ContactIcon /></ListItemIcon>
                        <ListItemText primary={'Contact'} />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        );
    }
}

LeftPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftPanel);