import React, { Component } from 'react';
import UpdateComponent from './WithCounter';

class HoverCouter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <h2 onMouseOver={incrementCount}>
                {this.props.name} Hovered {count} times
            </h2>
        )
    }
}

export default UpdateComponent(HoverCouter)