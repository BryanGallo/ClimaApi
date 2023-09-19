import Formulario from "./Formulario";
import useClima from "../hooks/useClima";

const AppClima = () => {
    const { hola } = useClima();
    
    return (
        <>
            <header>
                <h1>CONSULTAR CLIMA {hola}</h1>
            </header>
            <main className="dos-columnas">
                <Formulario />
            </main>
        </>
    );
};

export default AppClima;
