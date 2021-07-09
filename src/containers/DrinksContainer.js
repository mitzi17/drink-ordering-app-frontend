import React from 'react'
import DrinkForm from '../components/DrinkForm'
import DrinksList from '../components/DrinksList'

class DrinksContainer extends React.Component {

    render() {
        return (
            <div>
                <DrinkForm/>
                <DrinksList drinks={this.props.order && this.props.order.drinks}/>
            </div>
        )
    }
}

export default DrinksContainer