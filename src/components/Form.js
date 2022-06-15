import "./File.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import { useState } from "react";
import { Addcontact } from "../Service/api";

function Form() {
  const [contactdata, setcontactdata] = useState({
    name: "",
    num: "",
    email: ""
  })

  const { name, num, email } = contactdata;

  // const handleChange= (e) =>{
  //   setcontactdata({...contactdata,[e.target.name]:[e.target.value]})
  // }

  // const Addcontact = (e) => {
  //   e.preventDefault();
  //   Addcontact(contactdata);
  // }
  const formik = useFormik({
    initialValues: {
      name: "",
      num: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Must be 15 characters or less").required("Must be 15 characters or less"),
      num: Yup.string().matches(/[0-9]/, "Contact can only contain numbers.").required("Contact can only contain numbers"),
      email: Yup.string().max(50, "Invalid email").email("Required"),
    }),
    onSubmit: (values) => {
      debugger;
      // localStorage.setItem(values.Name, JSON.stringify(values));
      console.log("in submit")
    },
  });
  return (
    <div id="bgform">
      <div id="divform"  >
        <form id="form1" className="row g-3" onSubmit={formik.onSubmit}>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">HI</label>
            <input type="text" className="form-control" id="name" placeholder="Name" defaultValue={formik.values.name}
              onChange={formik.handleChange}
              // onChange={(e)=>handleChange(e)}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">Contact No.</label>
            <input type="tel" className="form-control" id="num" placeholder="03xxxxxxxxx" defaultValue={formik.values.num}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            // onChange={(e)=>handleChange(e)}
            ></input>
            {formik.touched.num && formik.errors.num ? (
              <div>{formik.errors.num}</div>
            ) : null}
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Email </label>
            <input type="email" className="form-control" id="email" placeholder="abc@gmail.com" defaultValue={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            // onChange={(e)=>handleChange(e)}
            ></input>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="col-12">
            <button style={{ margin: "10px", width: "350px", borderRadius: "10px", backgroundColor: "#00c4cc", borderColor: "#00c4cc", marginTop: "35px" }}
               type="submit" className="btn btn-primary" ><strong>Save</strong></button>
            {/* <Link
    style={{margin:"10px",width:"350px",borderRadius:"10px",backgroundColor:"#00c4cc",borderColor:"#00c4cc",marginTop:"35px"}} 
    to={'contacts'} id="btnnew" type="button" class="btn btn-success"><strong>Save</strong></Link>        */}
          </div>
        </form>
      </div>
    </div>

  );
}

export default Form;