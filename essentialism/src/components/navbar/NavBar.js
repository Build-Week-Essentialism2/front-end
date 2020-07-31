import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LineStyleIcon from '@material-ui/icons/LineStyle';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavAppBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "black", color: "white"}}>
        <Toolbar>
            <Link to="/" style={{textDecoration: 'none', color: "white"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          </Link>
          {/* <Link to="/" style={{textDecoration: "none", color: "white"}}> */}
          <IconButton href="https://kepler-8d3f95.netlify.app/" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LineStyleIcon />
          </IconButton>
          {/* </Link> */}
          
          <Typography variant="h6" className={classes.title}>
            Essentialism
          </Typography>
          <Link to={props.displayNav} style={{textDecoration: 'none', color: "white"}}>
          <Button color="inherit">{props.displayName}</Button>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("Values State", state.essentialismReducer.values)
  return{
    displayName: state.essentialismReducer.displayName,
    displayNav: state.essentialismReducer.displayNav,
  }
}

export default connect(mapStateToProps)(NavAppBar);