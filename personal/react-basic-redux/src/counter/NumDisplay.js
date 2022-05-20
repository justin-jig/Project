import React from 'react'

import {connect} from "react-redux";


const NumDisplay  = (props) => {

    const {sum} = props

    return(
        <div>
            <h1>{sum}</h1>
        </div>
    )
}

const mapStateToProps = ({countReducer}) => {

    console.log("--------------------------")
    console.log("NumDisplay")
    console.log("--------------------------")
    console.log(countReducer)
    console.log("--------------------------")

    return {sum:countReducer.current}
}


export default connect(mapStateToProps)(NumDisplay)

