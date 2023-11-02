import { Link } from "react-router-dom";



function Post(){
    
    
    
    return(
        <div className='post'>
        <div className="post-img">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaQJphkehZ8fr6r1wLLrCyzSKt-kjysRvXF8g04M_7gBaKZcbWe9NL6pIdXmLa5cc2qDI0Yo1hFzuQF8VIwZiE8XKifGEZBcXpR1BJFbVcWBrAaggoad3Q44U9IAkcVpnDIHSeA0v2xzvl85mUJl3-2auWKlaaVHdnyft3Qqbdcy1xv7neBYnKyObjX58/w400-h248/jackffffffffffff.png" alt="post_image" />
        </div>
        <div className="post-text">
          <Link to="/PostData" ><h2>ජැක්සන් ඇන්තනි මහතා</h2></Link>
          <p className='post-info'>
            <a href="#" className="author">Lahiru</a>
            <time>2023-10-05 10:43 AM</time>
          </p>
        </div>
      </div>
    );
}
export default Post;