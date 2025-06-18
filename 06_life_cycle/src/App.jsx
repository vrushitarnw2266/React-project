import { useState } from "react";
import "./App.css"
import Counter from "./components/counter"; 

function App() {
    let [flag, setFlag] = useState(false);

    const changeFlag = () => {
        setFlag(!flag);
    };

    return (
        <>
       <section className="div">
         <h1>React Life Cycle</h1>
        <button onClick={changeFlag}>Toggel Counter</button>

        <br /><br /><br />
        {flag ? <Counter /> : null}
       </section>
        </>
    );
}
export default App;