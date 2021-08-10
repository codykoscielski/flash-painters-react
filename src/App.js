import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Hero from './components/layout/Hero';


function App() {
  return (
    <Router>
      <Navigation />
      <Hero />
    </Router>
  );
}

export default App;
