import React ,{useState} from "react";

function View(props) {

    const[con,setCon] = useState("Connect");

    function HandleClick(){
        props.clic(props.id)
    }
    return (
        <div className="connect">
            <img className="profile" src="./images/people.png" alt="profile-pic"/>
            <h3 style={{fontFamily:"Nunito"}}>{props.name}</h3>
            <h3 style={{fontFamily:"Nunito",fontWeight:"normal"}}>{props.job}</h3>
            <h3 style={{fontFamily:"Nunito",color:"#09ccee"}}>{props.connections} Connections </h3>
            <button className="connect-btn" onClick={()=>{setCon("Connected")}}> {con}  </button>
            <button className="decline-btn" onClick={HandleClick}>Decline</button>
            <br />
        </div>
    );
}

export default View;
