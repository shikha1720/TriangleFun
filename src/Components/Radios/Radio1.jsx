import React, { useRef, useState } from "react";
import "./Radio.css";
import { Form } from "react-router-dom";

function Radio1() {
    const side1 = useRef();
    const side2 = useRef();
    const side3 = useRef();
    const [area,setArea]=useState(0);

    const handleArea=(event)=>{
        event.preventDefault();
        let s = (Number(side1.current.value)+Number(side2.current.value)+Number(side3.current.value))/2;
        let val = Math.pow((s*(s-Number(side1.current.value))*(s-Number(side2.current.value))*(s-Number(side3.current.value))),0.5);
        setArea(val.toFixed(4));
        side1.current.value=null;
        side2.current.value=null;
        side3.current.value=null;
    }
  return (
    <>
      <div className="form-container">
        <img
          src="https://prod-qna-question-images.s3.amazonaws.com/qna-images/answer/52a84462-a86c-42f8-ab94-a0fe8978a311/15e5489e-3174-46ec-bd4d-544c4692680d/51d58r.png"
          alt="three sided triangle"
        />

        <Form onSubmit={handleArea}>
          <div className="value-container">
            <label htmlFor="v1">a= </label>
            <input
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="value-box"
              required
              id="v1"
              ref={side1}
            />
            <label htmlFor="v2">b= </label>
            <input
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="value-box"
              required
              id="v2"
              ref={side2}
            />
            <label htmlFor="v3">c= </label>
            <input
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="value-box"
              required
              id="v3"
              ref={side3}
            />
          </div>
          <button type="submit" className="btn-submit">
            Calculate
          </button>
        </Form>
      </div>
      <div className="answer">
        { area === 0 ? <p>
        Output will be calculated as Area = √s*(s-a)*(s-b)*(s-c)
        </p> : <p>Area of Triangle = {area}</p>}
      </div>
    </>
  );
}

export default Radio1;
