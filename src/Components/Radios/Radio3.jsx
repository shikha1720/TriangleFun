import React, { useState, useRef} from 'react';
import './Radio.css';
import { Form } from "react-router-dom";


function Radio3() {
    const angle = useRef();
    const a = useRef();
    const b = useRef();
    const [area,setArea]=useState(0);

    const handleArea=(event)=>{
        event.preventDefault();
        let val = 0.5 * Number(a.current.value) * Number(b.current.value) * Math.sin(Number(angle.current.value));
        setArea(val.toFixed(4));
        angle.current.value=null;
        a.current.value=null;
        b.current.value=null;
    }
  return (
    <>
      <div className="form-container">
        <img
          src="https://cdn.inchcalculator.com/wp-content/uploads/2020/09/triangle-hypotenuse-two-sides.png"
          alt="three sided triangle"
        />

        <Form onSubmit={handleArea}>
          <div className="value-container">
            <label htmlFor="v1">A<sup>o</sup>= </label>
            <input
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="value-box"
              required
              id="v1"
              ref={angle}
            />
            <label htmlFor="v2">a= </label>
            <input
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="value-box"
              required
              id="v2"
              ref={a}
            />
            <label htmlFor="v3">b= </label>
            <input
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="value-box"
              required
              id="v3"
              ref={b}
            />
          </div>
          <button type="submit" className="btn-submit">
            Calculate
          </button>
        </Form>
      </div>
      <div className="answer">
        { area === 0 ? <p>
        Output will be calculated as Area = 0.5 * a * b * sin(A<sup>o</sup>)
        </p> : <p>Area of Triangle = {area}</p>}
      </div>
    </>
  )
}

export default Radio3
