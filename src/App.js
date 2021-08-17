import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import MarketPage from './components/pages/MarketPage';
import SplitsPage from './components/pages/SplitsPage';
import ContactPage from './components/pages/ContactPage';
import Login from './components/layout/Login';
import Signup from './components/layout/Signup';
import UserPortal from './components/pages/UserPortal';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/market' component={ MarketPage } />
          <Route path='/splits' component={ SplitsPage } />
          <Route path='/contact' component={ ContactPage } />
          <Route path='/login' component={ Login } />
          <Route path='/signup' component={ Signup } />
          <Route path='/userportal'component={ UserPortal } />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
