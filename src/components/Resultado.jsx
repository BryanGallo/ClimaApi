import React from "react";
import useClima from "../hooks/useClima";

const Resultado = () => {
    const { resultado } = useClima();

    return (
        <div className="contenedor clima">
            <h2>El Clima de {resultado.name}</h2>

            <p>
                {parseInt(resultado.main.temp)} <span>°C</span>{" "}
            </p>
            <div className="temp_min_max">
                <p>
                    Temperatura Mín: {parseInt(resultado.main.temp_min)}{" "}
                    <span>°C</span>{" "}
                </p>
                <p>
                    Temperatura Máx: {parseInt(resultado.main.temp_max)}{" "}
                    <span>°C</span>{" "}
                </p>
            </div>
        </div>
    );
};

export default Resultado;
