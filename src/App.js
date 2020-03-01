/// app.js
import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'




const BodyPotato = styled.body`
font-size: 12rem;
`

export default class App extends React.Component {
  render() {


    return (
      <html>
        <meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width"
/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
   <header>potato</header>
   <BodyPotato>carrot</BodyPotato>
   <Button variant="contained" color="primary">Potatoes</Button>
   <footer>peas</footer>
   </html>
    );
  }
}
