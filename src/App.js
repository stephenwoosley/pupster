import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";
import logo from './logo.svg';
import './App.css';

const App = () => 
  <Router>
    <div>
      <Container />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
    </div>
  </Router>

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
