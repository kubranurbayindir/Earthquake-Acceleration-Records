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
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

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
      <Desktop>Desktop or laptop</Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
      <Default>Not mobile (desktop or laptop or tablet)</Default>
    </div>
  );
}

export default App;
