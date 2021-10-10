import React, { useState } from "react";
import Recieved from "./Receive";
import Sent from "./Sent";


function Network() {

    const [rece, setrece] = useState(true);
    const [sent, setSent] = useState(false);

    function HandleClick() {
        setrece(false)
        setSent(true)
    }
    return (
        <div>
            <div className="buttun">
                <button style={{backgroundColor: rece ? "#0068c9" : null}} className="receive" onClick={() => { 
                    setrece(true);
                    setSent(false);
                    }}>Recieved</button>
                <button style={{backgroundColor: sent ? "#0068c9" : null}} className="sent" onClick={HandleClick}>Sent</button>
            </div>
            <div>
                {rece ? <Recieved /> : null}
                {sent ? <Sent /> : null}
            </div>
        </div>


    );
}

export default Network;

