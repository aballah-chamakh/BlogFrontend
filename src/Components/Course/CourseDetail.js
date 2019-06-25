import React from 'react';
import axios from 'axios' ;
import HOST_URL from '../../config' ;
import {Link} from 'react-router-dom' ;

class CourseDetail extends React.Component {
  state = {
    course : {
      posts : [] ,
    }
  }
  componentDidMount(){
    axios.get(HOST_URL+'/api/course/'+this.props.match.params.slug+'/').then(res=>{
      this.setState({course:res.data})
    })
  }
  render(){
    return (
      <div>
    <div class="row" style={{backgroundColor:'#e6f2ff',padding:'30px',borderRadius:'20px 20px 0px 0px'}} >
  <div class="col-lg-6" >
  <img src={this.state.course.image} width="100%" height="300px"  />
  </div>
  <div class="col-lg-6"  >

  <h1 class='text-warning'>{this.state.course.title}</h1>
  <p class='text-secondary'>{this.state.course.description}</p>
  { this.state.course.posts.length > 0 ?
    <Link class="btn btn-warning" to={'/post/'+this.state.course.posts[0].slug+'/'}>start</Link>
  : null }
  </div>
  </div>
  <div class="row">
  <div class="col-lg-12" style={{padding:'0px'}}>
    <ul class="list-group">
  <li class="list-group-item active">play list of the course</li>

{this.state.course.posts.map((post)=>{
  return(
    <li class="list-group-item d-flex justify-content-between align-items-center ">
      <Link to={'/post/'+post.slug+'/'}>{post.title}</Link>
       <button onClick={()=>{this.props.history.push('/post/'+post.slug+'/')}} class="btn btn-secondary">read more</button>
    </li>
  )
})}
    </ul>
  </div>
  </div>
  </div>
    )
  }
}

export default CourseDetail ;
