import { Form } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import "./File.css";

function New() {

    return ( 
        <div id="new">
            <Link to={'newcontact'} id="btnnew" type="button" class="btn btn-success"><strong>Add New Contact</strong></Link>
        </div>
     );
}

export default New;
