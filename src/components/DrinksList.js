import React from 'react'

const DrinksList = props => {
    
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
                    </div>
                    )}
            </div>
        </div>
        
    )
}

export default DrinksList