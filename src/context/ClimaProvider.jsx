import { useState, createContext } from "react";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: "",
    });

    const datoBusqueda = (e) => {
        // En este caso, el objeto especifica que la propiedad correspondiente en el estado *(ciudad o pais) se actualizará con el valor de la entrada con el mismo nombre en este caso en name ([e.target.name]) copiando el objeto anterior para no ser reemplazado, recuerda tambien puedes hacerlo con id ([e.target.id])

        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    //funcion que se conectara con la API
    const consultarClima = async (busqueda) => {
        console.log("acaaaaaaaa");
        console.log(busqueda);
    };

    return (
        <ClimaContext.Provider
            value={{ busqueda, datoBusqueda, consultarClima }}
        >
            {children}
        </ClimaContext.Provider>
    );
};
export { ClimaProvider };
export default ClimaContext;
