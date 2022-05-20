import React, {Component} from 'react'
import {connect} from "react-redux";



class NumInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    changeValue = (e) => {
        this.setState({
            text:e.target.value
        })
    }

    sendValue = () => {

        console.log(this.state)

        this.props.dispatch({type:'NUM', data: this.state.text})

    }


    render() {
        return(
            <div>
                <input type={"number"} onChange={this.changeValue}></input>
                <button onClick={this.sendValue}>RUN</button>
            </div>

        )
    }
}



export default connect()(NumInput)