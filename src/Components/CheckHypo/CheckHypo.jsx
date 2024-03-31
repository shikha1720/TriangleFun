import React, { useRef, useState } from 'react';
import "./CheckHypo.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import {Form, Link } from "react-router-dom";

function CheckHypo() {
    const a = useRef();
    const b = useRef();
    const [c,setC] = useState(0);

    const handleSubmit=(event)=>{
        event.preventDefault();
        let res = Math.pow(Math.pow(Number(a.current.value),2) + Math.pow(Number(b.current.value),2),0.5);
        setC(res.toFixed(4));
        a.current.value=null;
        b.current.value=null;
    }
  return (
    <div className="hypo-container">
      <div className="btn">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <IoMdArrowRoundBack />
          Back
        </Link>
      </div>

      <div className="form-container">
        <h2>
        Enter the lengths of sides of right angle triangle
        </h2>
        <img src='https://cdn.inchcalculator.com/wp-content/uploads/2020/09/triangle-hypotenuse-two-sides.png' alt='hypotanuos' />

        <Form onSubmit={handleSubmit}>
          <div className="angle-container">
            <label htmlFor="value1">a = </label>
            <input
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="angle-box"
              required
              ref={a}
              id='value1'
            />
            <label htmlFor="value2">b = </label>
            <input
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="angle-box"
              required
              ref={b}
              id='value2'
            />
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </Form>
        </div>
        <div className="answer">
          {c === 0 ? <p>
          Output will be calculated as c= √a<sup>2</sup> + b<sup>2</sup>
          </p>: <p>Hypotenuse of the Triangle is : {c}</p> }
        </div>
      
    </div>
  )
}

export default CheckHypo
