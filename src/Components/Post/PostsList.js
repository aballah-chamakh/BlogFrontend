import React from 'react' ;
import axios from 'axios' ;
import {Link} from 'react-router-dom' ;
import HOST_URL from '../../config.js' ;

class PostsList extends React.Component {
  state = {
    posts : []
  }
  componentDidMount(){
    axios.get(HOST_URL+'/api/posts/').then(res=>{
      this.setState({posts:res.data})
    })

  }
  render(){
    return(
      <div >
      {this.state.posts.map(post=>{
        return(
          <div class='row'>
                <div class='col-lg-5'>
                  <img src={post.image} style={{bordeRadius:'5px 5px 0px 0px'}}class='img-fluid'  />
                   <br/><br/>
                </div>
                <div class='col-lg-7'>
                    <h3>{post.title}</h3>
                     <div>{post.description}</div>
                     <button type='button' class='btn btn-primary' onClick={()=>{this.props.history.push('/post/'+post.slug+'/')}}>View</button><br/>
                 </div>

        </div>
        )
      })
}
        </div>
    )
  }
}
export default PostsList ;
