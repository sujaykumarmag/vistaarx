import React from "react";

function Header() {
    return (
        <header>
            <h1 style={{fontFamily:"Rubik,sans-serif"}} className="vistaar" >VISTAAR </h1>
            <h1 style={{fontFamily:"Rubik,sans-serif"}} className="x" >X</h1>
            <div className="top">
                <p style={{fontFamily:"Rubik,sans-serif"}} className="homep"> Home </p>
                <img className="home" src="./images/home.png" alt="home" />
                <p style={{fontFamily:"Rubik,sans-serif"}} className="netp">Network</p>
                <img className="network" src="./images/network.png" alt="network" />
                <p style={{fontFamily:"Rubik,sans-serif"}} className="postp">Post</p>
                <img className="posts" src="./images/posts.png" alt="posts" />
                <p style={{fontFamily:"Rubik,sans-serif"}} className="notifyp">Notification</p>
                <img className="notify" src="./images/bell.png" alt="notifications" />
                <p style={{fontFamily:"Rubik,sans-serif"}} className="sujayp">Sujay</p>
                <img className="person" src="./images/sujay.png" alt="User" />
            </div>
            <input className="search" placeholder="Search" />
        </header>
    );
}

export default Header;
