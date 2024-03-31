import React, { useRef, useState } from "react";
import "./TriPossible.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Form, Link } from "react-router-dom";

function TriPossible() {
  const angle1 = useRef();
  const angle2 = useRef();
  const angle3 = useRef();
  const [ result, setResult ] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    if (
      Number(angle1.current.value) +
        Number(angle2.current.value) +
        Number(angle3.current.value) ===
      180
    ) {
      setResult("Yes!!😊 Triangle can be formed");
    } else setResult("Triangle can't be formed 😔");

    angle1.current.value = null;
    angle2.current.value = null;
    angle3.current.value = null;

  };

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
          Enter the angles in below boxes and we will tell you it form a
          triangle
        </h2>
        <Form onSubmit={handleForm}>
          <div className="angle-container">
            <input
              ref={angle1}
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="angle-box"
              required
            />
            <input
              ref={angle2}
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="angle-box"
              required
            />
            <input
              ref={angle3}
              type="number"
              min={1}
              max={180}
              placeholder="1"
              className="angle-box"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </Form>
        <div className="answer">
          {result === "" ? <p>
            Output will be visible here <br />
            <em className="note">Note</em> : To form a triangle sum of angles
            must be 180<sup>o</sup>
          </p>: <p>{result}</p>}
        </div>
      </div>
    </div>
  );
}

export default TriPossible;
