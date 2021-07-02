export function fetchOrders() {
    return (dispatch) => {
    fetch('http://localhost:3000/orders')
    .then(response => response.json())
    .then(orders => dispatch({
        type: 'FETCH_ORDERS',
        payload: orders
    }))
    }
}