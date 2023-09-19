import Formulario from "./Formulario";
import useClima from "../hooks/useClima";
import Resultado from "./Resultado";
import Loading from "./Loading";

const AppClima = () => {
    const { resultado, cargando, noResultado } = useClima();

    return (
        <>
            <header>
                <h1>CONSULTAR CLIMA</h1>
            </header>
            <main className="dos-columnas">
                <Formulario />
                {/* colocamos un optional changening asi no tendremos problemas de que esa propiedad no exista */}
                {cargando ? (
                    <Loading />
                ) : resultado?.name ? (
                    <Resultado />
                ) : noResultado ? (
                    <p>{noResultado}</p>
                ) : (
                    <p>El clima se va a mostrar aqui</p>
                )}
            </main>
        </>
    );
};

export default AppClima;
