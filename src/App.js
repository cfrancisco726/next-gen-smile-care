import React, {Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Landing from './components/Pages/Landing'
import About from './components/Pages/About'
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';
import Appointment from './components/Pages/Appointment'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component {
  state =   {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }
  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Toolbar  drawerClickHandler={this.drawerToggleClickHandler}/> 
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
          <main style={{marginTop: '64px'}}>
            <Route path="/" exact component={Landing} /> 
            <Route path="/about" exact component={About} /> 
            <Route path="/services" exact component={Services} /> 
            <Route path="/contact" exact component={Contact} /> 
            <Route path="/appointment" exact component={Appointment} /> 
          </main>
          </Switch>
        </div>
      </Router>
   );
  }
}

export default App;
