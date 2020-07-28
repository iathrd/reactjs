import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    countIncrement() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h3>Count - {this.state.count}</h3>
                <button onClick={() => this.countIncrement()}>Increment</button>
            </div>
        )
    }
}

export default Counter;