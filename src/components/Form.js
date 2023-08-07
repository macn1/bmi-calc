import React from "react";
import { useState } from "react";

function FORM({getData}) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert , setAlert] = useState(false)

  const getWeight = (event) => {
    setWeight(event.target.value);
    
  };
  const getHeight = (event) => {
    setHeight(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight)||isNaN(height)) {

      console.log("input is not valid input");
      setAlert(true)
      
    }else{
      getData(weight,height)
    setAlert(false)
    setHeight("")
    setWeight("")
    // console.log(height, weight);
   } };
  // let alertMessage
  // if (alert) {
  //   alertMessage=<div className="alert alert-danger" role="alert">enter valid input </div>
    
  // }else{
  //   alertMessage=''
  // }
  return (

      <div className="col-sm-4 shadow rounded px-5">
        <h1 className="text-center pt-3 text-secondary h2">BMI calculator</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">weight (kg) :</label>
                <input
                  type="text"
                  value={weight}
                  onChange={getWeight}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">height (m) :</label>
                <input
                  type="text"
                  value={height}
                  onChange={getHeight}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="Get Bmi"
          />
        </form>
       
        {alert===true?<div className="alert alert-danger" role="alert">enter valid input </div> :null}
       
    
       
      </div>
  
  );
}

export default FORM;
