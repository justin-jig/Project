import React,{Component} from 'react'
import PropTypes from 'prop-types'


class Movie extends Component{


    render(){
        console.log(this.props);
        return(
        <div>
            <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
        </div>
        )
    }
}

class MoviePoster extends Component{

  
    render(){
        return(
            <img src={this.props.poster} alt="description of image"/>
        )
    }
}
export default Movie

