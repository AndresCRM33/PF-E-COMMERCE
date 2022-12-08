import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./components/Login/Login"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
