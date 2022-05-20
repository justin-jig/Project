import React from 'react'
import NumInput from "./NumInput";
import NumDisplay from "./NumDisplay";
import {connect} from "react-redux";

const Counter = (props) => {
    return (
        <div>
            <NumInput></NumInput>
            <NumDisplay/>
        </div>
    )
}


export default connect()(Counter)