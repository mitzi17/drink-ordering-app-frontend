import React from 'react'
import { connect } from 'react-redux'
import { createDrink } from '../actions/createDrink'

class DrinkForm extends React.Component {

    state = {
        base: 'milk tea',
        flavor: 'none',
        size: 'medium',
        add_on: 'none'
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        debugger
        event.preventDefault()
        this.props.createDrink(this.state, this.props.order.id)
        debugger
        this.setState({
            base: 'milk tea',
            flavor: 'none',
            size: 'medium',
            add_on: 'none'
        })
    }

    render() {
        return (
            <div>
                <h2>Create your drink:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Base:</label>
                    <select name="base" value={this.state.base} onChange={this.handleChange}>
                        <option>milk tea</option>
                        <option>green milk tea</option>
                        <option>black tea</option>
                        <option>jasmine green tea</option>
                    </select><br></br>
                    <label>Flavor:</label>
                    <select name="flavor" value={this.state.flavor} onChange={this.handleChange}>
                        <option>none</option>
                        <option>chocolate</option>
                        <option>coffee</option>
                        <option>honey</option>
                        <option>mango</option>
                        <option>peach</option>
                        <option>passion fruit</option>
                    </select><br></br>
                    <label>Size:</label>
                    <select name="size" value={this.state.size} onChange={this.handleChange}>
                        <option>medium</option>
                        <option>large</option>
                    </select><br></br>
                    <label>Add_on:</label>
                    <select name="add_on" value={this.state.add_on} onChange={this.handleChange}>
                        <option>none</option>
                        <option>honey boba</option>
                        <option>aloe</option>
                        <option>mango jelly</option>
                    </select><br></br>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {createDrink})(DrinkForm)