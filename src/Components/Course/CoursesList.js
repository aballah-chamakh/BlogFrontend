import React from 'react' ;
import axios from 'axios' ;
import HOST_URL from '../../config.js' ;

class CoursesList extends React.Component {
  state = {
    courses : []
  }
  componentDidMount(){
    axios.get(HOST_URL+'/api/courses/').then(res=>{
      this.setState({courses:res.data})
    })
  }
  render(){
    return(
      <div>
      <div class='row' >
  <div class="col-lg-12">
    <h3 class='text-warning'>Courses</h3>
    <hr />
  </div>
</div>
<div class='row' >

{this.state.courses.map(course=>{
  return(
    <div class='col-lg-6'  >
     <div class="card" >
       <img class="card-img-top" src={course.image} height="300px" />
        <div class="card-body">
           <h5 class="card-title text-primary">{course.title}</h5>
           <p class="card-text">{course.description}</p>
           <button type='button' onClick={()=>{this.props.history.push("/course/"+course.slug+"/")}} class="btn btn-primary">detail</button>
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
export default CoursesList ;
