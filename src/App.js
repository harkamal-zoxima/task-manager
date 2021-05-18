import logo from './logo.svg';
import './App.css';
import Home from './Home/Home'
import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
