import React from "react";
import usuario from "../img/usuario.png"

export default function InfosUsuario() {
    return(
        <div className="usuario">
            <img src={usuario} alt="icone usuario"/>
            <p>Carlota Joaquina</p>
        </div>
    )
}