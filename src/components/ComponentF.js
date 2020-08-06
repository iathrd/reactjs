import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {(username, age) => {
                    return <div>Hello {username} {age} years old</div>
                }}
            </UserConsumer>
        )
    }
}

export default ComponentF;