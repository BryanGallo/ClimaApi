import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
    //como usar nuestras variables de entorno
    // console.log(import.meta.env.VITE_API_KEY);
    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: "",
    });
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);
    const [noResultado, setNoResultado] = useState(false);

    const datoBusqueda = (e) => {
        // En este caso, el objeto especifica que la propiedad correspondiente en el estado *(ciudad o pais) se actualizará con el valor de la entrada con el mismo nombre en este caso en name ([e.target.name]) copiando el objeto anterior para no ser reemplazado, recuerda tambien puedes hacerlo con id ([e.target.id])

        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    //funcion que se conectara con la API
    const consultarClima = async (busqueda) => {
        setCargando(true);
        setNoResultado(false);
        setResultado({});
        try {
            const { ciudad, pais } = busqueda;
            const appId = import.meta.env.VITE_API_KEY;

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=3&appid=${appId}`;
            // console.log(url);
            const { data } = await axios.get(url);
            //como solo queremos traer un dato colocamos posicion 0 caso contrario deberiamos integrar un ciclo para recorrer el arreglo
            console.log(data[0]);
            const { lat, lon } = data[0];
            //una vez obtenido los datos de la API, nos conectamos conecta con la API para obtener el clima
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`;
            // console.log(urlClima);

            //*Debido a que axios nos devuelve data pero eso usamos en la anterior url nos saldra error asi que podemos usar destructuracion y renombramos la variable
            const { data: clima } = await axios.get(urlClima);
            console.log(clima);
            setResultado(clima);
        } catch (error) {
            console.log(error);
            setNoResultado("No existe Resultado");
        } finally {
            setCargando(false);
        }
    };

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datoBusqueda,
                consultarClima,
                resultado,
                cargando,
                noResultado,
            }}
        >
            {children}
        </ClimaContext.Provider>
    );
};
export { ClimaProvider };
export default ClimaContext;
