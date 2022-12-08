import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div >
            <h1> BIENVENIDOS A HENRY E-COMMERCE </h1>
            <Link to='/home'>
                <button className="ButtonHOME">Ingresar</button>
            </Link>

        </div>
    )
}