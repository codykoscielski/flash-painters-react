import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/layout/Navigation';


function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
