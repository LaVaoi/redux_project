import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTicket from './pages/AddTicket';
import HistoTicket from './pages/HistoTicket';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Update from './pages/Update';
import RechercherUser from './pages/RechercherUser';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/addTicket' element={<AddTicket/>}/>
        <Route path='/editing/:numero' element={<Update/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/rechercher' element={<RechercherUser/>}/>
        <Route path='/histoTicket' element={<HistoTicket/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
