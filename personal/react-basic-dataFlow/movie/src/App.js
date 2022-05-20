import React,{Component} from 'react';
import './App.css';
import Movie from './Movie/Movie.jsx'

/* const moviesTitle =[
  "Matix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]
const moviesImages =[
  "http://cfile201.uf.daum.net/image/2577C93B53D9A6CE0B24D1",
  "http://thumb.mtstarnews.com/06/2009/08/2009081916014489476_1.jpg",
  "http://cfile201.uf.daum.net/image/2577C93B53D9A6CE0B24D1",
  "http://thumb.mtstarnews.com/06/2009/08/2009081916014489476_1.jpg"
] */

/* 
  //컴포넌트 외부로 만들때
  const movies =[
  {
  // id:1,
  title: "Matrix",
  poster: "http://cfile201.uf.daum.net/image/2577C93B53D9A6CE0B24D1"
  },
  {
    // id:2,
    title: "Full Metal Jacket",
    poster: "http://thumb.mtstarnews.com/06/2009/08/2009081916014489476_1.jpg"
  },
  {
    //id:3,
    title: "Oldboy",
    poster: "http://cfile201.uf.daum.net/image/2577C93B53D9A6CE0B24D1"
  },
  {
     //id:4, 
    title: "Star Wars",
    poster: "http://thumb.mtstarnews.com/06/2009/08/2009081916014489476_1.jpg"
  }
] */



// map 메소드를 사용할떄 꼭 return값이 있어야한다.
/** 기본형
  <Movie title = {movie[0].title} poster={movie[0].poster}/>         
    <Movie title = {movie[1].title} poster={movie[1].poster}/>
    <Movie title = {movie[2].title} poster={movie[2].poster}/>
    <Movie title = {movie[3].title} poster={movie[3].poster}/>
 */

 //  map사용시 key값부여 필수!
class App extends Component{

  state = {
    greeting : 'Hello!',
    movies :[
      {
      title: "Matrix",
      poster: "http://cfile201.uf.daum.net/image/2577C93B53D9A6CE0B24D1"
      },
      {
        /* id:2, */
        title: "Full Metal Jacket",
        poster: "http://thumb.mtstarnews.com/06/2009/08/2009081916014489476_1.jpg"
      },
      {
       /*  id:3, */
        title: "Oldboy",
        poster: "http://cfile201.uf.daum.net/image/2577C93B53D9A6CE0B24D1"
      },
      {
        /* id:4, */
        title: "Star Wars",
        poster: "http://thumb.mtstarnews.com/06/2009/08/2009081916014489476_1.jpg"
      }
    ]
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        //바꾸기
        movies:[
          {
            title : "Transportting",
            poster: "http://cfile201.uf.daum.net/image/2577C93B53D9A6CE0B24D1"
          }
        ] ,
        /** 
         * 
         * 
        //추가
        movies:[
          ...this.state.movies,
          {
            title : "Transportting",
            poster: "http://cfile201.uf.daum.net/image/2577C93B53D9A6CE0B24D1"
          }
        ]
        */        
      })
    },1000)
  }
  componentWillMount(){
      console.log("will mount")
    }
     /**
    componentDidMount(){
    console.log("did mount")
    setTimeout(()=>{
      
      //this.state.greeting ='something'  직접적으로 작성하면 안된다.
        this.setState({
        greeting :'Hello again!'
      })
    }, 2000)
  }
  {this.state.greeting}*/
  render(){
    console.log(this.state +"인근")
  return (
    <div className="App">
      {this.state.movies.map((movie, index) =>{
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })} 
 
    </div>
  )
}
}



export default App;
