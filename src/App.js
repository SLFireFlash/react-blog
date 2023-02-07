import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from './layout';
import IndexPage from './pages/indexPage';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage />}/>
      <Route path='/login' element={<div>login</div>} />
      <Route path='/signUp' element={<div>Sign Up</div>} />
    </Route>
  
  </Routes>
  );
}

export default App;
