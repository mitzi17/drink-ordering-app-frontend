export default function orderReducer( state= { orders: [] }, action ) {

    switch (action.type) {
        case 'FETCH_ORDERS':
            return {orders: action.payload}
        case 'CREATE_ORDER':
            return {...state, orders: [...state.orders, action.payload]}
        default:
            return state
    }
}