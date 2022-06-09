
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUS from './component/Home/ContactUS';
import Home from './component/Home/Home';
import Project from './component/Home/Project';
import Resume from './component/Home/Resume';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Shared/Footer';
import Navber from './component/Shared/Navber';

function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Project></Project>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/contactME' element={<ContactUS></ContactUS>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
