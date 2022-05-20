import React from 'react'
import {connect} from 'react-redux'

const RecodeHistory = ({arr}) => {

    console.log("arr" , arr)
    const view = arr.map((data, idx) =>
        <li>{idx}: {data}</li>
    )

    return (<ul>{view}</ul>)
}



const mapStateToProps = ({recodeReducer}) => {

    return {arr: recodeReducer.arr}

}

export default connect(mapStateToProps)(RecodeHistory)



