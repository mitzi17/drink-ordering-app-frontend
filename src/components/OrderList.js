import React from 'react'

const OrderList = props => {

    return(
        <div>
            {props.orders.map(order => <li key={order.id}>{order.date}</li>)}
        </div>
    )
}

export default OrderList