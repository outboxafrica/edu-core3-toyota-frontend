import React from 'react'
import {Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Team Toyota Welcomes You</h1>
            <Link to="/question">
            <button id="btn">What is your Question?</button>
            </Link>
        </div>
      
    )
}

export default Home
