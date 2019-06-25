import React from 'react' ;
import {Link} from 'react-router-dom' ;

class Navbar extends React.Component {

  render(){
    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
<div class="container">
<Link class="navbar-brand" href='/AbdallahChamakh/'>Abdallah Chamakh</Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarResponsive">
 <ul class="navbar-nav ml-auto">
   <li class="nav-item active">
     <Link to='/' class="nav-link" >home</Link>
   </li>
   <li class="nav-item">
     <Link class="nav-link" to='/courses/'>courses</Link>
   </li>
   <li class="nav-item">
     <Link class="nav-link" to='/projects/'>project</Link>
   </li>

   <li class="nav-item">
     <Link class="nav-link" to='/about/'>about me</Link>
   </li>
 </ul>
</div>
</div>
</nav>
      </div>
    )
  }
}
export default Navbar ;
