import React from 'react'
import { Redirect } from 'react-router-dom'
import DrinksContainer from '../containers/DrinksContainer'

const OrderShow = props => {
    console.log(props)

    let order = props.orders[props.match.params.id - 1 ]

    return(
        <div>
            <h1>
                Order #: { order ? order.id : null } - { order ? order.date : null }
            </h1>
            <DrinksContainer order={order} />
        </div>
    )
}

export default OrderShow