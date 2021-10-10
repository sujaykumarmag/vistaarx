import React, { useState } from "react";
import Data from "../data.json";
import View from "./View";
import Suggest from "./Suggest";


var first = Data.slice(0, 2);
var second = Data.slice(2, 11);


function Recieved() {

    const [item, setItem] = useState(second);
    const [con, setCon] = useState(first);

    function DeleteItem(datum) {
        setItem((prev) => {
            return (prev.filter(
                (item, index) => {
                    return index !== datum;
                }
            ));
        })
    }

    function DeleteCon(data) {
        setCon((prev) => {
            return (prev.filter(
                (item, index) => {
                    return index !== data;
                }))
        })

    }

    function Connect(data, index) {
        return (
            <div>
                <View
                    key={index}
                    id={index}
                    name={data.name}
                    job={data.job}
                    connections={data.connect}
                    clic={DeleteCon}
                />
            </div>
        );
    }

    function MoreConnect(data, index) {
        return (
            <Suggest
                key={index}
                id={index}
                name={data.name}
                job={data.job}
                suggestions={data.connect}
                clicks={DeleteItem}
            />
        );
    }

    return (
        <div>
            <div className="horizon" >
                <h2 style={{fontFamily:"Nunito"}} className="hr"> <span className="lines"> You have <span className="blue">2 New Connections</span> </span></h2>
            </div>
            <div className="two">{con.map(Connect)}</div>
            <br />
            <div>
                <div className="horizon1">
                    <h2 style={{fontFamily:"Nunito"}} className="hr1"><span className="lines1"> More suggestions for You </span></h2>
                </div>
                <div className="more-connect">{item.map(MoreConnect)}</div>
            </div>
        </div>
    );
}

export default Recieved;
