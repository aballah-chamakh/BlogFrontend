import React from 'react' ;
import {Link} from 'react-router-dom' ;
import './NavbarUser.css' ;
class NavbarUser extends React.Component {
  render(){
    return(
  
      <nav class='navbar_user'>
           <div class='logo'>
           <img src='https://media.wired.com/photos/5c83219a692d1216df5ce666/master/pass/Transpo-Elon-Musk-RTX6P9YW.jpg' />
           <Link to='/portfolio/' class='brand' >AbdallahChamakh</Link>
           </div>
           <div class='search'>
           <input placeholder='search for a post'   />
            <button><img src="https://img.icons8.com/material-outlined/24/000000/search.png" /></button>
           </div>
           <ul class='nav_list'>
             <li class='item'><Link class='link'  to='/' >posts</Link></li>
             <li class='item'><Link class='link'  to='/courses/' >courses</Link></li>
             <li class='item'><Link class='link'  to='/projects/' >projects</Link></li>
             <li class='item'><Link class='link'  to='/portfolio/' >portfolio</Link></li>
           </ul>
      </nav>

    )
  }
}

export default NavbarUser ;
