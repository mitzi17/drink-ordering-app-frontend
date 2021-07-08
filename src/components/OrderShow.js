import React from 'react'

const OrderShow = props => {
    console.log(props)

    let order = props.orders[props.match.params.id - 1 ]

    return(
        <li>
           Order #: { order ? order.id : null } - { order ? order.date : null }
        </li>
    )
}

export default OrderShow