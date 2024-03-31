import React,{ useState, useRef} from 'react';
import './Radio.css';
import { Form } from "react-router-dom";

function Radio2() {
    const base = useRef();
    const height = useRef();
    const [area,setArea]=useState(0);

    const handleArea=(event)=>{
        event.preventDefault();
        let val = 0.5 * Number(base.current.value) * Number(height.current.value);
        setArea(val.toFixed(4));
        base.current.value=null;
        height.current.value=null;
    }
  return (
    <>
      <div className="form-container">
        <img
          src="https://d20khd7ddkh5ls.cloudfront.net/screen_shot_2018-04-26_at_10.09.32_am.png"
          alt="three sided triangle"
        />

        <Form onSubmit={handleArea}>
          <div className="value-container">
            <label htmlFor="v1">base= </label>
            <input
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="value-box"
              required
              id="v1"
              ref={base}
            />
            <label htmlFor="v2">height= </label>
            <input
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="value-box"
              required
              id="v2"
              ref={height}
            />
          </div>
          <button type="submit" className="btn-submit">
            Calculate
          </button>
        </Form>
      </div>
      <div className="answer">
        { area === 0 ? <p>
        Output will be calculated as Area = 0.5 * base * height
        </p> : <p>Area of Triangle = {area}</p>}
      </div>
    </>
  )
}

export default Radio2
