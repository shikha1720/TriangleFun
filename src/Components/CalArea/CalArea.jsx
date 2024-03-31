import React, { useState } from 'react';
import "./CalArea.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Form, Link } from "react-router-dom";
import Radio1 from '../Radios/Radio1';
import Radio2 from '../Radios/Radio2';
import Radio3 from '../Radios/Radio3';

function CalArea() {
  const [radio,setRadio] = useState("");
  const handleRadio=(event)=>{
    setRadio((event.target.id).toString());
  }

  return (
    <div className="tri-container">
      <div className="btn">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <IoMdArrowRoundBack />
          Back
        </Link>
      </div>     
      <div className="form-container">
        <h2>
          Calculate Area
        </h2>
        <h3>Select an option below as per the data you have for a triangle</h3>
        <Form>
          <div className="angle-container">
            <div className='radios'>
            <input type='radio' id='radio1' name='option' onClick={handleRadio} />
            <label htmlFor='radio1'>If you have length of 3 sides</label>
            </div>
            <div className='radios'>
            <input type='radio' id='radio2' name='option' onClick={handleRadio} />
            <label htmlFor='radio2'>If you have base and height length</label>
            </div>
            <div className='radios'>
            <input type='radio' id='radio3' name='option' onClick={handleRadio} />
            <label htmlFor='radio3'>If you have length of 2 sides and included angle</label>
            </div>
          </div>
        </Form>
      </div>
      {radio === 'radio1'? <Radio1 />: null}
      {radio === 'radio2'? <Radio2 />: null}
      {radio === 'radio3'? <Radio3 />: null}
    </div> 
  )
}

export default CalArea
