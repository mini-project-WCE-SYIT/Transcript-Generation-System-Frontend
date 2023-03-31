import './App.css';
import React,{useState, useEffect} from 'react';
import Checkout from './components/Checkout';
import {useSelector} from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login'
import Procedure from './components/Procedure';
import AdminHome from './components/AdminHome';



const App = () => {
  const user = useSelector((state) => state);
  const [role, setRole] = useState('');
useEffect(() => {
  if(user.authReducer.authData){
    console.log(user.authReducer.authData.data.role);
    const myRole = user.authReducer.authData.data.role;
    setRole(myRole);
  }
},[user])
return (

    <BrowserRouter>
    <Routes>
      <Route  path='/' element={role==='admin'?<Navigate to='/admin/home'/>:<Login />}/>    
      <Route exact path="/form" element={role?<Checkout/>:<Navigate to = '../' />}/>
      <Route exact path="/procedure" element={role?<Procedure/>:<Navigate to = '../' />}/>
      <Route exact path="/admin/home" element={role === 'admin'?<AdminHome/>:<Navigate to = '../' />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
