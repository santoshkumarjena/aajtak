import React from 'react'

export default function Filter(props) {
    return (
        <div>
            <input type="text" placeholder="search by name" 
                onChange={(e) => props.filterEvent(e.target.value)}/>
        </div>
    )
}
