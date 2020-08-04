import React from 'react'

function NameList() {
    const name = ['Bruce', 'Carl', 'Diana']
    return (
        <div>
            {/* <h2>{name[0]}</h2>
            <h2>{name[1]}</h2>
            <h2>{name[2]}</h2> */}
            {
                name.map(x => <h2>{x}</h2>)
            }
        </div>
    )
}

export default NameList
