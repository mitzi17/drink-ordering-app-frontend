import React from 'react';
import {connect} from 'react-redux'
import OrdersContainer from './containers/OrdersContainer'
import { Route } from 'react-router-dom'
import NavMenu from './components/Navbar';


class App extends React.Component {

  componentDidMount() {
    
  }

  render () {
    return (
      <div className="App">
        <NavMenu />
        HELLO WELCOME!!!
        <OrdersContainer/>
      </div>
      )
    }
  }


export default connect()(App);
