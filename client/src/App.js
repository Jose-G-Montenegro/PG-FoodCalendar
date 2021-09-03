import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import SearchBar from './Components/SearchBar/SearchBar'
import CreateRecipe from './Components/CreateRecipe/CreateRecipe.jsx'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path = '/search/:name' component={SearchBar}/>
        <Route path = '/create/recipe' component={CreateRecipe}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
