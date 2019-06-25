import React from 'react' ;
import axios from 'axios' ;
import {Link} from 'react-router-dom' ;
import HOST_URL from '../../config' ;


class ProjectsList extends React.Component {
  state = {projects:[]}
  componentDidMount(){
    axios.get(HOST_URL+'/api/projects/').then(res=>{
      this.setState({projects:res.data})
      console.log(res.data);
    })
  }
  render(){
    return(
      <div>
      <div class='row'  >
        <div class="col-lg-12">
          <h3 class='text-warning'>Projects</h3>
        <hr />
        </div>
      </div>
      <div class='row'  >

{this.state.projects.map(project=>{
  return(
  <div class='col-lg-6'   >
  <div class="card"  >
    <img class="card-img-top" src={project.image} height="300px" />
    <div class="card-body">
      <Link to={"/project/"+project.slug+"/"} >
      <h5 class="card-title text-primary">{project.title}</h5>
      </Link>
        <p class="card-text">{project.description}</p>
       <button type='button' onClick={()=>{this.props.history.push("/project/"+project.slug+"/")}} class="btn btn-primary">detail</button>
    </div>
  </div>
  </div>
)
})
}


      </div>
      </div>
    )
  }
}
export default ProjectsList ;
