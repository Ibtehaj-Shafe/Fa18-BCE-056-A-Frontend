import "./File.css";
import logo from "./img/logo.PNG";
import {useEffect, useState} from "react";
import { getsearchcontact } from '../Service/api';

function Header(props) {
const[username,setname]=useState();

const Onsearch =async ()=>{
   const response = await getsearchcontact(username);
   console.log(response.data)
   props.setCollection(response.data);
}
    return (
        <div id="headerpg1">
                <h1 id="heading1pg1">Your's Contact List</h1>
                <img id="logo" src={logo}></img>
             <div id="divpg1">
                <input 
                style={{height:"35px",width:"500px",borderRadius:"5px",borderColor:"white",borderBlockStyle:"solid"}}
                type={"text"}
                onChange={(e)=>{setname(e.target.value)}}
                ></input>
                <button onClick={() => Onsearch()}  id="btnpg1"><strong>Search</strong></button>
             </div>
        </div>
      );
}
// onClick={() => Onsearch(props.id)}
// onChange={(e)=>search(e)} 
export default Header;