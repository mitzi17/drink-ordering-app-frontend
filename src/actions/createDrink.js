export const createDrink = (drink, orderId) => {
debugger
    return (dispatch) => {
        fetch(`http://localhost:3000/orders/${orderId}/drinks`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(drink)
        })
        .then(response => response.json())
        .then(order => dispatch({type: 'CREATE_DRINK', payload: order}))

    }
}