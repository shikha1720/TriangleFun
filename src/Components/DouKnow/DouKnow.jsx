import React from 'react';
import './DouKnow.css';
import Facts from '../../Data/Data';
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function DouKnow() {
  return (
    <div className='fact-container'>
        <div className="btn">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <IoMdArrowRoundBack />
          Back
        </Link>
      </div>
        <h2>Do U Konw <MdOutlineQuestionMark/></h2>
        {Facts.map((fact)=>{
            return <div className='card' key={fact}>{fact}</div>
        })}

    </div>
  )
}

export default DouKnow
