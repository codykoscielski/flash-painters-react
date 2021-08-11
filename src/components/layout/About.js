import React from 'react';

const About = () => {
    return (
    <div className="about">
        <h1>Who are we</h1>
        <hr /> <br />
        <p>Tattoo Flash is an online platform for tattoo artists and flash painters to share beautiful works of art. 
            Since 2020, we have been providing an online resource for inspiration, learning, and building our own community of artists. 
            This is a safe place for any beginner, intermediate, or professional artist to communicate. 
        </p><br />
        <h1>What we offer</h1>
        <hr /><br />
        <div className="about-cards">
            <div className="about-card">
                <i className="fas fa-hand-holding-usd"></i>
                <h4>Buy</h4>
                <p>Support artists by buying their original flash</p>
            </div>
            <div className="about-card">
                <i className="fas fa-wallet"></i>
                <h4>Sell</h4>
                <p>Sell your own flash to other collectors in the communtiy</p>
            </div>
            <div className="about-card">
                <i className="far fa-handshake"></i>
                <h4>Trade</h4>
                <p>Meet other flash painters to trade orginal pieces with each other</p>
            </div>
            <div className="about-card">
                <i className="fas fa-magic"></i>
                <h4>Create</h4>
                <p>Make connections with painters to create beautiful splits</p>
            </div>
        </div>
    </div>

    )
}

export default About;