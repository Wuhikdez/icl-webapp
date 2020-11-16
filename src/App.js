import './App.css';
import RaceResult from './race/RaceResult';
import { Route, Switch, withRouter } from 'react-router-dom';
import CalendarComponent from './CalendarComponent';
import CyclistComponent from './cyclist/CyclistComponent';

import React, { Component } from 'react'
import TeamComponent from './teams/TeamComponent';
import Header from './Header';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <Switch>
          <Route exact path='/' render={(props) => <p></p>}></Route>
          <Route path='/race/:race_id/:year/:tag' render={(props) => <RaceResult {...props} />} />
          <Route path='/race/:race_id/:year' render={(props) => <RaceResult {...props} />} />
          <Route path='/calendar/:year' render={(props) => <CalendarComponent {...props} />} />
          <Route path='/cyclist/:cyc_id/:year' render={(props) => <CyclistComponent {...props} />} />
          <Route path='/team/:team_id/:year' render={(props) => <TeamComponent {...props} />}/>
        </Switch>
      </div>
    )
  }
}


/*function App() {




  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(props) => <p onClick={() => this.props.history.push('/calendar/2018')}>2018</p>}></Route>
        <Route path='/race/:race_id/:year/:tag' render={(props) => <RaceResult {...props} />} />
        <Route path='/race/:race_id/:year' render={(props) => <RaceResult {...props} />} />
        <Route path='/calendar/:year' render={(props) => <CalendarComponent {...props} />} />
      </Switch>
    </div>
  );
}
*/
export default withRouter(App);
