import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from './layout';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/loginPage';
import SignUp from './pages/signUp';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage />}/>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signUp' element={<SignUp />} />
    </Route>
  
  </Routes>
  );
}

export default App;
