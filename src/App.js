import React, {Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Landing from './components/Pages/Landing/Landing'
import About from './components/Pages/About/About'
import Services from './components/Pages/Services/Services';
import Contact from './components/Pages/Contact/Contact';
import Appointment from './components/Pages/Appointment/Appointment'
import Footer from './components/Footer/Footer'
import Thank_You from './components/Pages/Thank_You/Thank_You'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


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
          <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
          {backdrop}
          <Switch>
          <main style={{marginTop: '100px'}}>
            <Route exact path="/"  component={Landing} /> 
            <Route exact path="/about"  component={About} /> 
            <Route exact path="/services" component={Services} /> 
            <Route exact path="/contact" component={Contact} /> 
            <Route exact path="/appointment" component={Appointment} /> 
            <Route exact path="/thank_you" component={Thank_You} /> 
          </main>
          </Switch>
          <Footer/>
        </div>
      </Router>
   );
  }
}

export default App;
