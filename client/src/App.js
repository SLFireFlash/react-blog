import {Route, Routes , } from "react-router-dom";
import Post from './components/Post'
import './App.css'
import Layout from "./components/Layout";
import Indexpage from "./pages/IndexPage";
import Loginpage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Indexpage/>} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/PostData" element={<div>full post</div> }/>
        </Route>
      </Routes>

    </>
  )
}

export default App
