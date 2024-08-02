import Theories from "./API/Theories"
import Previsao5Dias from "./API/Previsao5Dias"
import Canicula from "./API/Canicula"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "" : "dark"}>
            <Theories/>
            <Previsao5Dias/>
            <Canicula/>
        </main>
    )
}

