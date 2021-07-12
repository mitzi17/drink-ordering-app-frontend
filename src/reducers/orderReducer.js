export default function orderReducer( state= { orders: [] }, action ) {

    switch (action.type) {
        case 'FETCH_ORDERS':
            return {orders: action.payload}
        case 'CREATE_ORDER':
            return {...state, orders: [...state.orders, action.payload]}
        case 'CREATE_DRINK':
            let orders = state.orders.map(order => {
                if (order.id === action.payload.id) {
                    return action.payload
                } else {
                    return order
                }
            })
            return {...state, orders: orders}
        case 'DELETE_DRINK':
            let ordersDeleteDrink = state.orders.map(order => {
                if (order.id === action.payload.id) {
                    return action.payload
                } else {
                    return order
                }
            })
            return {...state, orders: ordersDeleteDrink}

        default:
            return state
    }
}