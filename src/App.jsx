import { useState } from "react";
import AppClima from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <ClimaProvider>
                <AppClima />
            </ClimaProvider>
        </>
    );
}

export default App;
