import React from 'react'
import {connect} from 'react-redux'
import { fetchOrders } from '../actions/fetchOrders'
import OrderInput from '../components/OrderInput'
import OrdersList from '../components/OrdersList'
import OrderShow from '../components/OrderShow'
import { Route } from 'react-router-dom'

class OrdersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchOrders()
    }

    render() {
        return(
            <div>
            <Route path='/orders/new' component={OrderInput} />
            <Route path='/orders/:id' render={ (routerProps) => <OrderShow {...routerProps} orders={this.props.orders} />} />
            <Route exact path='/orders' render={ () => <OrdersList orders={this.props.orders} /> }/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps, {fetchOrders})(OrdersContainer)