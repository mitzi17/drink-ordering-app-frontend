export const deleteDrink = (drinkId, orderId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/orders/${orderId}/drinks/${drinkId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(order => dispatch({type: 'DELETE_DRINK', payload: order}))
    }
}