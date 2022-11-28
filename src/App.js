import { BrowserRouter, Switch, Route } from 'react-router-dom';
//styles
import './App.css';
import { Navbar } from './components/Navbar';
//components
import './pages/create/Create';
import { Create } from './pages/create/Create';
import './pages/home/Home';
import { Home } from './pages/home/Home';
import './pages/recipe/Recipe';
import { Recipe } from './pages/recipe/Recipe';
import { Search } from './pages/search/Search';
function App() {
  console.log('yeess');
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/recipes/:id'>
            <Recipe />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

//swiech otacza wsdzystkie routy, zeby pokaywal sie tylko jeden a nie wszystkie naraz
