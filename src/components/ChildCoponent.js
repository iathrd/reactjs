import React from 'react'

function ChildCoponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('iqbal')}>Greet Parent</button>
        </div>
    )
}

export default ChildCoponent
