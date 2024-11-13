import Layout from "../Layout/Layout.jsx";
import "../../main.css"
import 'animate.css';
import ContextProvider from "../ContextProvider/Context.jsx";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
            <ContextProvider>
                    <div className={"overflow-hidden relative min-h-screen flex flex-col justify-between"}>
                        <Layout/>
                    </div>
            </ContextProvider>
            </BrowserRouter>
        </>
    )
}
export default App