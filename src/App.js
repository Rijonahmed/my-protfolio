
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Project from './component/Home/Project';
import Footer from './component/Shared/Footer';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project' element={<Project></Project>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
