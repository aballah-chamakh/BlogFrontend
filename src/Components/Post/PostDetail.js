import React from 'react' ;
import axios from 'axios' ;
import {Link} from 'react-router-dom' ;
import HOST_URL from '../../config.js' ;
import './post_detail.css' ;

class PostDetail extends React.Component {
  state = {
    post : {course_or_project:{
      serie : { posts:[] }
    }},
    post_playlist_class : 'post_playlist',
    post_class : 'post' ,
  }
   fetch_post = (slug)=>{
    axios.get(HOST_URL+'/api/post/'+slug+'/').then(res=>{
      this.setState({post:res.data})
    })
  }
  componentDidMount(){

    this.fetch_post(this.props.match.params.slug) ;

  }
  toogle_playlist = ()=>{
    console.log('btn pressed');
  let state = this.state
  if (state.post_playlist == 'post_playlist'){
    state.post_playlist_class = 'hided_post_playlist' ;
    state.post_class = 'expand_post'
  }
  else {
    state.post_playlist_class = 'post_playlist' ;
    state.post_class = 'post'
  }
  this.setState({state:state})
  }
  render(){
    let post_playlist_class = 'post_playlist_class'
    if (this.state.post.slug && this.state.post.slug != this.props.match.params.slug){
        this.fetch_post(this.props.match.params.slug) ;
    }
    return(
      <div  class='row' class='post-detail' >
        <div class={this.state.post_class}>
        <div class='post_title' >
        <h3 class='text-warning' >{this.state.post.title}</h3>
        <button onClick={this.toogle_playlist}>show</button>
        </div>

            <hr/>
          <center><img src={this.state.post.image} style={{width:'70%'}}   /></center>
          <div>
            {this.state.post.description}
          </div>
        </div>
        <div  class={this.state.post_playlist_class} >
        <h4>{this.state.post.course_or_project.type} : <Link to={'/'+this.state.post.course_or_project.type+'/'+this.state.post.course_or_project.serie.slug+'/'} >{this.state.post.course_or_project.serie.title}</Link></h4>
         <hr/>
        <img  src={this.state.post.course_or_project.serie.image} style={{width:'100%',borderRadius:'10px 10px 0px 0px'}}  />
          <ul class="list-group">
        {this.state.post.course_or_project.serie.posts.map(post=>{
        return(
        <li class={this.state.post.id == post.id ? "list-group-item  d-flex justify-content-between align-items-center active" : "list-group-item  d-flex justify-content-between align-items-center"}>
        <Link to={'/post/'+post.slug+'/'} ><span style={this.state.post.id == post.id ? {color:'white'} : null } >{post.title}</span></Link>
        <button type='button' onClick={()=>{this.props.history.push('/post/'+post.slug+'/')}} class="btn btn-warning">read</button>
        </li>
        )
        })
        }
          </ul>
        </div>
      </div>
    )
  }
}
export default PostDetail ;
