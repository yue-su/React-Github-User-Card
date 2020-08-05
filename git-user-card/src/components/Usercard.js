import React from 'react';
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Avatar from "@material-ui/core/Avatar"
import { Grid } from "@material-ui/core"

const Usercard = props => {

    const { user } = props
    
    return (
      <Paper>
        <Grid container spacing={4}>
          <Grid item sm={2} container justify="space-around" direction='column' alignItems="center">
            <Avatar alt="Remy Sharp" src={user.avatar_url} />
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="subtitle1">{user.location}</Typography>
          </Grid>
          <Grid item sm={10}>
            <img
              src="http://ghchart.rshah.org/yue-su"
              alt="2016rshah's Github chart"
            />
          </Grid>
        </Grid>
      </Paper>
    )
}

export default Usercard
