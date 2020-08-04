import React, { Component } from 'react';

class UserGreting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogIn: false
        }
    }

    render() {

        return (this.state.isLogIn ?
            <div>Welcome Iqba</div> :
            <div>Welcome Guest</div>
        )

        // let message
        // if (this.state.isLogIn) {
        //     message = <div>Welcome Iqbal</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return (<div>{message}</div>)

        // if (this.state.isLogIn) {
        //     return (<div>Welcome Iqbal</div>)
        // } else {
        //     return (<div>Welcome Guest</div>)
        // }
        // return (
        //     <div>
        //         <div>Welcome Iqbal</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }

}

export default UserGreting;