import React from 'react'
import { Router } from 'react-router-dom'
import OrderShow from './OrderShow'

const OrdersList = props => {

    return(
        <div>
            {props.orders.map(order =>
                <div key={order.id}> <OrderShow order={order}/> </div>)}
        </div>
    )
}

export default OrdersList