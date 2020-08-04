import React from 'react';
import './App.css';
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

class App extends React.Component{
  render() {
    return (
      <div>
        <header></header>
        <Container maxWidth="sm">
          <Typography variant='h3'>Git User Card</Typography>
        </Container>
        <footer></footer>
      </div>
    )
  }
}

export default App;
