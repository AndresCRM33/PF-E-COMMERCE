import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ id}) {
    return (
        <Link to={`/home/${id}`}>
            <div>
            </div>
        </Link>
    )
}
