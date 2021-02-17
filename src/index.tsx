import React from 'react';
import ReactDOM from 'react-dom';
import {Home, CreateCar, Garage} from './components';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Navbar, Nav } from 'react-bootstrap';
import './styles.css';
import logo from "./assets/img/car-icon.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navbar className="NavBar" bg="primary" variant="dark">
      <Navbar.Brand>
        <img
          alt="Car Icon"
          src={logo}
          width="60"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>
        <Link to="/">Home</Link>
        </Nav.Link>
      <Nav.Link>
        <Link to="/Garage">Your Garage</Link>
      </Nav.Link>
    </Nav>
    </Navbar>
    
    <Switch>
      <Route exact path="/">
        <Home title="Home"/>
      </Route>
      <Route path="/CreateCar">
        <CreateCar />
      </Route>
      <Route path="/Garage">
        <Garage />
      </Route>
    </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
