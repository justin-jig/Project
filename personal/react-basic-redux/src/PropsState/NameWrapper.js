import React,{Component} from 'react'
import InputComp from './InputComp'
import ListComp from './ListComp'


export default class NameWrapper extends Component {

    constructor(props){
        super(props)
        this.state ={
            name:['AAA','BBB','CCC']
        }
    }
    addName  =() =>{
        this.setState({name : [...this.state.name,'AAA']})
    }
    render(){
        return(
            <div>
                <InputComp fn={this.addName}></InputComp>
                <ListComp names={this.state.name}></ListComp>
            </div>
        )
    }
}