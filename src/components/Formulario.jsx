import { useState } from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
    const [alert, setAlert] = useState("");

    const { busqueda, datoBusqueda, consultarClima } = useClima();
    const { ciudad, pais } = busqueda;

    const handleSubmit = (e) => {
        e.preventDefault();

        //*validando campos destructurados
        // if ([ciudad, pais].includes("")) {
        //     setAlert("Todos los campos son obligatorios");
        //     return;
        // }

        //*o podemos usar propiedades del objeto apra validar
        if (Object.values(busqueda).includes("")) {
            setAlert("Todos los campos son obligatorios");
            return;
        }

        try {
            setAlert('')
            consultarClima(busqueda)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="contenedor">
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="ciudad">Ingrese la Ciudad</label>
                    <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        value={ciudad}
                        onChange={datoBusqueda}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="pais">Escoja el país</label>
                    <select
                        id="pais"
                        name="pais"
                        value={pais}
                        onChange={datoBusqueda}
                    >
                        <option value=""> Seleccione un país</option>
                        <option value="US">Estados Unidos</option>
                        <option value="EC">Ecuador</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <input type="submit" value="Consultar Clima" />
                {alert && <p className="alerta">{alert}</p>}
            </form>
        </div>
    );
};

export default Formulario;
