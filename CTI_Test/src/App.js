import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Detail from './Components/Detail';

function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path="/Home" element={<Home/>} /> 
    <Route path="/Login" element={<Login/>} /> 
    <Route path="/Detail" element={<Detail/>} /> 

   </Routes>
   </>
  );
}

export default App;
