import './App.css';
import {Route,Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Form from './components/Form';
import Form1 from './components/Form1';
import {useEffect, useState} from "react";
import {Getcontact} from "./Service/api"
import Edit from './components/Edit';

function App() {
//  const [contactdata,setdata]=useState([]);

//  useEffect(()=>{
//   Getcontactinfo();
//  },[]);

//  const Getcontactinfo= () =>{
//   const result=Getcontact();
//   setdata(result.data);
//  }
  return (
    <div className="App">
          <Routes>
           <Route path='/Updatecontact/:id' element={<Edit/>}></Route>
            <Route index element={<Layout/>}></Route>
            <Route path='newcontact' element={<Form1/>}></Route>   
          </Routes>
    </div>
  );
}

export default App;
