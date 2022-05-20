import React from 'react'

const ListComp = ({names}) =>{

    const view = names.map((obj,ide)=>
        <li>{obj}</li>)

    return (
        <ul>
            {view}
        </ul>
    )
}
export default ListComp