import React from 'react';
import {connect} from 'react-redux'
import OrdersContainer from './containers/OrdersContainer'


class App extends React.Component {

  componentDidMount() {
    
  }

  render () {
    return (
      <div className="App">
        <OrdersContainer/>
      </div>
      )
    }
  }


export default connect()(App);
