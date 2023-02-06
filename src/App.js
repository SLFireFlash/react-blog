import './App.css';
import Post from "./post";
import Header from "./header";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
  <Routes>
    <Route index element={
      <main>
          <Header/>
          <Post />
          <Post />
      </main>
    } />
  </Routes>
  );
}

export default App;
