import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }

    handelUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handelUsernameChange} />
                    <h1>{this.state.username}</h1>
                </div>
            </form>
        )
    }
}

export default Form