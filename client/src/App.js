import {Route, Routes , } from "react-router-dom";
import Post from './components/Post'
import HeaderNav from './components/HeaderNav';
import './App.css'



function App() {

  return (
    <>
      <Routes>
        <Route index element={
            <main>
              <HeaderNav />
              <Post />
              <Post />
              <Post />
            </main>
          }/>
        
        <Route path="/login" element={
          <>
            <HeaderNav />
            <div>Login</div>
          </>
        } />
        <Route path="/register" element={
          <>
            <HeaderNav />
            <div>Register</div>
          </>
        } />
        <Route path="/Home" element={
          <main>
            <HeaderNav />
            <Post />
            <Post />
            <Post />
          </main>
        } />
        <Route path="/PostData" element={
          <div>
            full post
          </div>

        }/>

      </Routes>

    </>
  )
}

export default App
