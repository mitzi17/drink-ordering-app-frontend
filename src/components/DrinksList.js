import React from 'react'
import { connect } from 'react-redux'
import { deleteDrink } from '../actions/deleteDrink'

const DrinksList = props => {

    const handleRemoveDrink = drink => {
        props.deleteDrink(drink.id, drink.order_id)
    }
    
    return(
        <div>
            <h2>Drinks</h2>
            <div>
                {props.drinks && props.drinks.map(drink =>
                    <div key={drink.id}>
                        <h3>Drink #: {props.drinks.indexOf(drink)}<br></br></h3>
                            <li>Base: {drink.base}<br></br></li>
                            <li>Flavor: {drink.flavor}<br></br></li>
                            <li>Size: {drink.size}<br></br></li>
                            <li>Add_on: {drink.add_on}</li>
                            <button onClick={() => handleRemoveDrink(drink)}>Remove Drink</button>
                    </div>
                    )}
            </div>
        </div>
        
    )
}

export default connect(null, {deleteDrink})(DrinksList)