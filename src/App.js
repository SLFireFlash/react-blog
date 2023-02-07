import './App.css';
import Post from "./post";
import {Route, Routes} from "react-router-dom";
import Layout from './layout';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Post />}/>
      <Route path='/login' element={<div>login</div>} />
      <Route path='/signUp' element={<div>Sign Up</div>} />
    </Route>
  
  </Routes>
  );
}

export default App;
