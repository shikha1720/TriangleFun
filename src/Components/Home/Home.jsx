import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigator = useNavigate();

  return (
    <div className="box-container">
      <div>
        <div className="box" onClick={()=>navigator('/TriannglePossible')}>Triangles possible with angles?</div>
        <div className="box" onClick={()=>navigator('/CheckHypo')}>Check Hypotenuse</div>
      </div>
      <div>
        <div className="box" onClick={()=>navigator('/CalArea')}>Calculate Area</div>
        <div className="box" onClick={()=>navigator('/DoUKnow')}>Do You Know?</div>
      </div>
    </div>
  );
}

export default Home;
