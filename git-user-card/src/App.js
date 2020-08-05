import React from 'react';
import './App.css';
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import axios from 'axios'
import Usercard from './components/Usercard'

class App extends React.Component{

  constructor() {
    super()
    
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/yue-su`)
      .then(res => this.setState({
        user: res.data
      })
    )
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <header style={{ padding: 20 }}>
          <Grid container justify='center'>
            <Typography variant="h3">Git User Card</Typography>
          </Grid>
        </header>
        <Container maxWidth="md">
          <Usercard user={this.state.user} />
        </Container>
        <footer></footer>
      </div>
    )
  }
}

export default App;
