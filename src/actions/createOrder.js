export const createOrder = (data) => {

    return (dispatch) => {
    fetch('http://localhost:3000/orders', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(order => dispatch({type: 'CREATE_ORDER', payload: order}))
    }
}