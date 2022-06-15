import React from "react";
import "./File.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Addcontact,Updatecontact } from "../Service/api";
import { useNavigate } from "react-router-dom";

const Form1 = (props) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
        name: props.name,
        num: props.num,
        email: props.mail,
      },
      validationSchema: Yup.object({
        name: Yup.string().max(15, "Must be 15 characters or less").required("Must be 15 characters or less"),
        num: Yup.string().matches(/[0-9]/, "Contact can only contain numbers.").required("Contact can only contain numbers"),
        email: Yup.string().email("Invalid email address").required("Required"),
      }),
    onSubmit: (values) => {
      if (props.id!=undefined){
        values.id=props.id;
        Updatecontact(values);
      }else{
        Addcontact(values);
      }
      navigate("/");
    },
    enableReinitialize:true
  });
return (
    <div id="bgform">
      <div id="divform"  >
        <form id="form1" className="row g-3" onSubmit={formik.handleSubmit}>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name" value={formik.values.name}
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
            <input type="tel" className="form-control" id="num" placeholder="03xxxxxxxxx" value={formik.values.num}
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
            <input type="email" className="form-control" id="email" placeholder="abc@gmail.com" value={formik.values.email}
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
          </div>
        </form>
      </div>
    </div>

  );
            }
export default Form1;