import React from 'react' ;
import axios from 'axios';
import HOST_URL from '../../config' ;
import {Link} from 'react-router-dom' ;

class ProjectDetail extends React.Component {

  state = {
    project : {posts:[] }
  }
  componentDidMount(){
    axios.get(HOST_URL+'/api/project/'+this.props.match.params.slug+'/').then(res=>{
      this.setState({project:res.data})
    }
    )
  }
  render(){
    return(
      <div>
  <div class="row" style={{backgroundColor:'#e6f2ff',padding:'30px',borderRadius:'20px 20px 0px 0px'}} >
<div class="col-lg-6" >
<img src={this.state.project.image} width="100%" height="300px"  />
</div>
<div class="col-lg-6"  >

<h1 class='text-warning'>{this.state.project.title}</h1>
<p class='text-secondary'>{this.state.project.description}</p>

{ this.state.project.posts.length > 0 ?
  <button class="btn btn-warning" onClick={()=>{this.props.history.push('/post/'+this.state.project.posts[0].slug)}} >start</button>
  : null
}

</div>
</div>
<div class="row">
<div class="col-lg-12" style={{padding:'0px'}}>
  <ul class="list-group">
      <li class="list-group-item active">play list of the course</li>

{ this.state.project.posts.map(post=>{
  return(
    <li class="list-group-item d-flex justify-content-between align-items-center ">
    <Link to={'/post/'+post.slug+'/'}>{post.title}</Link>
    <Link to={'/post/'+post.slug+'/'} class="btn btn-secondary">read more</Link>
  </li>
  )
})
}
  </ul>
</div>
</div>
</div>
    )
  }
}
export default ProjectDetail  ;
