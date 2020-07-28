import React from 'react'

function FunctionClick() {
    function clickHandle() {
        console.log('button click')
    }
    return (
        <div>
            <button onClick={clickHandle}>click</button>
        </div>
    )
}

export default FunctionClick
