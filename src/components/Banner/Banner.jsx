 
import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="Banner">
      <div className="content">
        <img
          className="log"
          src="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeJo_eP3qXqDWnaRWhbGbLu1VN_yACCncu6G7-CW4pCSzZD74lWxcVvYw4koEFN9bmO2PERuTLR7KiXVURG1MSTFXlS9GTB0selwbgbCBtTR.png?r=295"
          alt=""
        />
        <h1 className="name1">Breaking Bad</h1>
        <p>
          <span>2008 | A | 5 Seasons | Drama | Thrillers </span>
        </p>
        <div className="btns">
          <button className="btn">PLAY</button>
          <button className="btn">MY LIST</button>
        </div>
        <div className="dicsd">
          <p className="disc1">
            A terminally ill chemistry teacher teams with a former student to
            manufacture crystal meth to secure his family's future.
          </p>
          <p className="disc2">
            <span>Starring</span> : Bryan Cranston,Aaron Paul,Anna Gunn
          </p>
          <p className="disc3">
            <span>Creators</span> : Vince Gilligan
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
