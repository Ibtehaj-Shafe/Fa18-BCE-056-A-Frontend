import React, { Component, useState } from 'react';

import {Link} from 'react-router-dom';

function Contactcard(props) {
    return ( 
        <div id="cardsec2a">
        <h5 style={{marginLeft:"80px",marginTop:"8px",width:"100px"}}> {props.name} </h5>
        <h5 style={{marginLeft:"80px",marginTop:"8px",width:"100px"}}>{props.num}</h5>
        <h5 style={{marginLeft:"80px",marginTop:"8px",width:"200px"}}>{props.mail}</h5>
        <div id="btndivsec2">
        <Link style={{marginTop : "-5px"}} to={`Updatecontact/${props.id}`} id="btnpg1sec2" type="button" className="btn btn-success"><strong>Edit</strong></Link>
        <button onClick={() => props.deleteContact(props.id)} id="btnpg1sec2"><strong>Delete</strong></button>
        </div>
        <hr></hr>
        </div>
     );
}
export default Contactcard;
