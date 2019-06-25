import React from 'react' ;
import {Route,Switch} from 'react-router-dom' ;
import PostsList from './Post/PostsList' ;
import PostDetail from './Post/PostDetail' ;
import CoursesList from './Course/CoursesList' ;
import CourseDetail from './Course/CourseDetail' ;
import ProjectsList from './Project/ProjectsList' ;
import ProjectDetail from './Project/ProjectDetail' ;

import NavbarUser from './Navbar/NavbarUser' ;

class Routing extends React.Component {
  render(){
    return(
      <div >
       <NavbarUser />
       <div class='container' style={{backgroundColor:'#eaeeef',marginTop:'120px'}}>
       <Switch>
       <Route  path='/' exact component={PostsList} />
       <Route  path='/post/:slug/' component={PostDetail} />
       <Route  path='/courses/'   component={CoursesList} />
       <Route  path='/course/:slug/' component={CourseDetail} />
       <Route  path='/Projects/' component={ProjectsList} />
       <Route  path='/Project/:slug/' component={ProjectDetail} />
       </Switch>
       </div>
       </div>

    )
  }
}

export default Routing
