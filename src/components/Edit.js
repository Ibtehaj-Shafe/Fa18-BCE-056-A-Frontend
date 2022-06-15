import Form1 from "./Form1";
import { getsinglecontact } from '../Service/api';
import { useState,useEffect} from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Data from "./Data";

function Edit(props) {
    const{ id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    useEffect(()=>{
        async function getContact(){
            const response =await getsinglecontact(id);
            setUser(response.data);
        }
        getContact();
        
     },[]);

    return ( 
        <div>
            <Form1 id={id} name={user.name} num={user.num} mail={user.email}/>
        </div>
     );
}

export default Edit;