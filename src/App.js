import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CalendarComponent from './CalendarComponent';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/calendar/:year' render={(props) => <CalendarComponent {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
