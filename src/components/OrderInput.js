import React from 'react'
import {connect} from 'react-redux'
import { createOrder } from '../actions/createOrder'

class OrderInput extends React.Component {

    state= {
        date: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createOrder(this.state)
        this.setState({
            date: ''
        })
    }

    render() {
        return(
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>Select a date: </label>
                <input type="datetime-local" name="date" value={this.state.date} onChange={this.handleChange} />
                <input type="submit"/>
              </form>  
            </div>
        )
    }
}

export default connect(null, {createOrder})(OrderInput)