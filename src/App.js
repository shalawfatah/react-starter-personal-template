import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
