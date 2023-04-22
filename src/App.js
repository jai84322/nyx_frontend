import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';
import MultiImage from './components/MultiImage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        < Route path='/' element = { <Home/>} />
        < Route path='/add' element = { <AddUser/>} /> 
        < Route path='/all' element = { <AllUser/>} />
        < Route path='/edit/:id' element = { <EditUser/>} />
        < Route path='/multiImage' element = { <MultiImage/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
