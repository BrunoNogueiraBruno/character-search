import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Main from './pages/main';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
