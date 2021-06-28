import './App.css';
import Navi from "./layouts/Navi.jsx";
import Dashboard from './layouts/Dashboard.jsx'
import Footer from "./layouts/Footer.jsx";
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
