import { Link } from "react-router-dom";
import ReactTimeAgo from 'react-time-ago'

function Post({_id,title,cover,content,createdAt,author}){
    
    
    
    return(
        <div className='post'>
        <div className="post-img">
          <Link to={`/post/${_id}`}>
            <img src={'http://localhost:4000/'+cover} alt="post_image" />
          </Link>
        </div>
        <div className="post-text">
          <Link to={`/post/${_id}`} ><h2>{title}</h2></Link>
          <p className='post-info'>
            <a href="#" className="author">{author.username}</a>
            <time><ReactTimeAgo date={createdAt} locale="en-US"/></time>
          </p>
        </div>
      </div>
    );
}
export default Post;