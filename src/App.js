import './App.css';
import Navi from "./layouts/Navi.jsx";
import Dashboard from './layouts/Dashboard.jsx'
import Bodxchart from "../src/components/Bodxchart.js";
import Bodychart from "../src/components/Bodychart.js";
import Bodzchart from "../src/components/Bodzchart.js";
import Footer from "./layouts/Footer.jsx";
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Navi />
      <Router>
        <Container className="main">
          <Dashboard />
          <Switch>
            <Route path="/bodxchart" component={Bodxchart} />
            <Route path="/bodychart" component={Bodychart} />
            <Route path="/bodzchart" component={Bodzchart} />
          </Switch>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
