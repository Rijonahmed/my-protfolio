
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './component/Home/Blog';
import ContactUS from './component/Home/ContactUS';
import Home from './component/Home/Home';
import Project from './component/Home/Project';
import Resume from './component/Home/Resume';
import NotFound from './component/NotFound/NotFound';
import MotoDealer from './component/ProductsDetails/MotoDealer';
import MotoParts from './component/ProductsDetails/MotoParts';
import WeddingPhotographer from './component/ProductsDetails/WeddingPhotographer';
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
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/contactME' element={<ContactUS></ContactUS>}></Route>
        <Route path='/motoParts' element={<MotoParts></MotoParts>}></Route>
        <Route path='/motoDealer' element={<MotoDealer></MotoDealer>}></Route>
        <Route path='/weddingPhotographer' element={<WeddingPhotographer></WeddingPhotographer>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
