import React, {Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Landing from './components/Pages/Landing/Landing'
import About from './components/Pages/About/About'
import Services from './components/Pages/Services/Services';
import Appointment from './components/Pages/Appointment/Appointment'
import Footer from './components/Footer/Footer'
import ThankYou from './components/Pages/ThankYou/ThankYou'
import Error from './components/Pages/Error/Error'
import ScrollToTop from './components/ScrollToTop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


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
        <ScrollToTop />
        <div style={{height: '100%'}}>
          <Toolbar  drawerClickHandler={this.drawerToggleClickHandler}/> 
          <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
          {backdrop}
          <Switch>
          <main style={{marginTop: '100px'}}>
            <Route exact path="/"  component={Landing} /> 
            <Route exact path="/about"  component={About} /> 
            <Route exact path="/services" component={Services} /> 
            <Route exact path="/appointment" component={Appointment} /> 
            <Route exact path="/thankyou" component={ThankYou} /> 
            <Route exact path="/error" component={Error} /> 
          </main>
          </Switch>
          <Footer/>
        </div>
      </Router>
   );
  }
}

export default App;
