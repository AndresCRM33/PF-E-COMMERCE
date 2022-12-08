import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="bg bg-gray-800 flex flex-col justify-center">
                <form>
                    <h2>SIGN IN</h2>
                    <div>
                        <label>Mail</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="text" />
                    </div>
                    <div>
                        <p><input type="checkbox" /> Recordarme</p>
                        <p>Has olvidado tu contraseña ?</p>
                    </div>
                    <Link to='/home'>
                        <button className="btn btn-blue btn-blue:hover">Registrarse</button>
                    </Link>
                </form>
            </div>


        </div>
    )
}