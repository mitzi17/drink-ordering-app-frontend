import React from 'react';
import {connect} from 'react-redux'
import OrdersContainer from './containers/OrdersContainer'
import { Route } from 'react-router-dom'
import NavMenu from './components/Navbar';
import Homepage from './components/Homepage';


class App extends React.Component {

  componentDidMount() {
    
  }

  render () {
    return (
      <div className="App">
        <NavMenu />
        <Route exact path='/' component={Homepage} />
        <OrdersContainer/>
      </div>
      )
    }
  }


export default connect()(App);
