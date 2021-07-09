import React from 'react'
import { Router, Link } from 'react-router-dom'
import OrderShow from './OrderShow'

const OrdersList = props => {

    return(
        <div>
            {props.orders.map(order =>
                <li key={order.id}>
                    <Link to={`/orders/${order.id}`}>Order #: {order.id} - {order.date}</Link> 
                </li>)}
        </div>
    )
}

export default OrdersList