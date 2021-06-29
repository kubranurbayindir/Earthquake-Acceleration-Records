import React from 'react'
import Sidebar from "./Sidebar.jsx";
import { Grid, Container, Header } from "semantic-ui-react";

function Dashboard() {
  return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Sidebar />
            </Grid.Column>
            <Grid.Column width={12}>
            <Container text style={{ marginBottom: '2em' }}>
      <Header as='h1'>TDG Earthquake Acceleration Records </Header>
      <Header as='h3'>✨ It is always ready to be developed and renewed! ✨ </Header>
      <p>
      This site has a web API sample application that graphs the earthquake record. 
      The data obtained from three different acceleration sensors contains the earthquake shaking information in the instantaneous time. 
      </p>
    </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
  )
}

// const Home = () => (
//   <div>
   
//   </div>
  
// );
export default Dashboard;
