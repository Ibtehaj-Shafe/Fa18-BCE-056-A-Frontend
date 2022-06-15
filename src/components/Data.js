import React, { Component } from 'react';
import Contactcard from './Contactcard';
import {useEffect, useState} from "react";
import { deletecontact,Getcontact } from '../Service/api';
import Edit from './Edit';
// class Data extends Component {
// state = {
//         arr: [
//             {id:1,name:"Ibtehaj",num:"03208540xxx",email:"syedibtehaj1997@gmail.com"},
//             {id:2,name:"Tahoor",num:"03234583xxx",email:"tahoorshah@gmail.com"},  
//         ]
//        } 

//     handledel=(id)=>{
//         const d=this.state.filter(p=> p.id !==id)
//         this.setcontacts(d)
        
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.arr.map (arr=>(
//                      <Contactcard name={arr.name} num={arr.num} mail={arr.email} onDelete={this.handledel}/>
//                 ))}
//             </div>
//         );
//     }
// }

function Data (props) {
     console.log(props)
 
useEffect(()=>{
    async function getContacts(){
        const response = await Getcontact();
        props.setCollection(response.data)
    }
    getContacts();
    
 },[]);

 const deleteContact=async(id) =>{
    await deletecontact(id);
    console.log(props.collection);
    var newData=props.collection.filter(x=>x._id!=id);
    props.setCollection(newData);
 }

 const fetchContact = () => {
     return props.collection.map(item => <Contactcard key={item._id} id={item._id} name={item.name} num={item.num} mail={item.email} deleteContact={deleteContact}/>)
 }
 const fetchid = () => {
    return props.collection.map(item => <Edit item={item}/>)
}
    return ( 
        <div>
            {"No Contacts found" && fetchContact()}
        </div>
     );
}

export default Data;