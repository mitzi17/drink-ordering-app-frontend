import React from 'react'
import {connect} from 'react-redux'
import { fetchOrders } from '../actions/fetchOrders'
import OrderInput from '../components/OrderInput'
import OrderList from '../components/OrderList'

class OrdersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchOrders()
    }

    render() {
        return(
            <div>
              <OrderInput />
              <OrderList orders={this.props.orders}/>
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