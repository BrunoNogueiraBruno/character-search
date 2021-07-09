import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import CharacterDetails from './pages/characterDetails';
import Main from './pages/main';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/character-details/:id' component={CharacterDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
