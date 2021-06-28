import React from 'react'
import Sidebar from "./Sidebar.jsx";
import Bodxchart from "../components/Bodxchart.js";
import Bodychart from "../components/Bodychart.js";
import Bodzchart from "../components/Bodzchart.js";
import { Grid, Container, Header } from "semantic-ui-react";

import { BrowserRouter as Router, Route } from "react-router-dom";


function Dashboard() {
  return (
    <Router>
      <div  style={{
            width: "100%",
            height: "100%",
          }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Sidebar />
            </Grid.Column>
            <Grid.Column width={12}>
              <Route path="/" component={Home} />
              <Route path="/bodxchart" component={Bodxchart} />
              <Route path="/bodychart" component={Bodychart} />
              <Route path="/bodzchart" component={Bodzchart} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Router>
  )
}

const Home = () => (
  <div  style={{
            width: "100%",
            height: "100%",
          }}>
    <Container text style={{ marginBottom: '2em' }}>
      <Header as='h1'>TDG Earthquake Acceleration Records </Header>
      <Header as='h3'>✨ It is always ready to be developed and renewed! ✨ </Header>
      <p>
      This site has a web API sample application that graphs the earthquake record. 
      The data obtained from three different acceleration sensors contains the earthquake shaking information in the instantaneous time. 
      </p>
    </Container>
  </div>
  
);
export default Dashboard;
