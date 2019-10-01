import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import avatar from "../static/images/avatar/avatar.jpg";

const useStyle = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(2),
    width: 60,
    height: 60
  }
}));

function UserHeader(props) {
  const classes = useStyle();

  // vars from login store
  const { username } = props;

  return (
    <Container maxWidth="lg">
      <Paper>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={6}>
            <Avatar alt="avatar" src={avatar} className={classes.avatar} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">{username}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    username: state.LoginReducer.username
  };
};

export default connect(
  mapStateToProps,
  null
)(UserHeader);
