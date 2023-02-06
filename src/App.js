import logo from './logo.svg';
import './App.css';

function App() {
  return (
<main>
  <header>
    <a herf="" className='logo'>TeamHiru Blog</a>
    <nav>
      <a href=''>LOG IN</a>
      <a href=''>SIGN UP</a>
    </nav>
  </header>
  <div className="post">
    <div className="image">
      <img src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" alt="#" />
    </div>
    <div className="texts">
      <h2>Welcome To my Blog</h2>
      <p className="info">
        <a className="author">HIRU</a>
        <time>2023-02-06</time>
      </p>
      <p className="summary">
      Apex Legends is available for free on 
      Ps4, Ps5, Xbox One, Xbox Series X|S,
      Nintendo Switch, and PC via EA App and Steam.
      Choose your platform below, download the game, 
      and get ready to jump into the arena.
      </p>
    </div>
  </div>
{/* end of the post */}

<div className="post">
    <div className="image">
      <img src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" alt="#" />
    </div>
    <div className="texts">
      <h2>Welcome To my Blog</h2>
      <p className="info">
        <a className="author">HIRU</a>
        <time>2023-02-06</time>
      </p>
      <p className='summary'>
      Apex Legends is available for free on 
      Ps4, Ps5, Xbox One, Xbox Series X|S,
      Nintendo Switch, and PC via EA App and Steam.
      Choose your platform below, download the game, 
      and get ready to jump into the arena.
      </p>
    </div>
  </div>
  
  
</main>
  );
}

export default App;
