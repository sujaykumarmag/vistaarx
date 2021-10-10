import React, { useState } from "react";

function Suggest(props) {

    const [con, setCon] = useState("Connect")

    function HandleClick() {
        props.clicks(props.id)
    }
    return (
        <div className="suggestion">
            <div onClick={HandleClick} class="close-container">
                <div class="leftright"></div>
                <div class="rightleft"></div>
                <label class="close">close</label>
            </div>
            <img className="profile-suggest" src="./images/people.png" alt="profile-pic" />
            <h3 style={{fontFamily:"Nunito"}} className="suggest-name">{props.name}</h3>
            <h3 style={{fontFamily:"Nunito"}} className="suggest-job">{props.job}</h3>
            <div  className="orange-suggest"><h3 style={{fontFamily:"Nunito"}} className="suggest-connect">{props.suggestions} <span className="suggest-connect1">Connections </span> </h3></div>
            <button className="suggest-connection" onClick={() => { setCon("Request Sent") }}>{con}</button>
            <br />
            <br />
            <br />
        </div>
    );
}

export default Suggest;
