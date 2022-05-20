import React,{Component} from 'react'


export default class InputComp extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button onClick={this.props.fn}>ADD</button>
            </div>
        )
    }
}