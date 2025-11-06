import React, { useState } from "react";
import "./App.css";

function App() {

    const [mode, setMode] = useState("light")

    const [value, setInput] = useState("");

    const [_output, setOutput] = useState("")

    const updateValue = (Value) => {
        setInput(prev => prev + Value);
    };

    const ClearValue = () => {
        setInput("");
        setOutput("");
    }
    const removeValue = () => {
        setInput(prevValue => prevValue.slice(0, -1))
    }

    const getResult = () => {
        try {
            const result = eval(value);
            setOutput(result);
            setInput(result.toString());
        } catch (error) {
            console.error("Wrong Expression: ", error);
            setOutput("Error");
        }
    };

    return (
        <div className="container">
            <div className="calculator" style={{ backgroundColor: mode === "dark" ? "black" : "white", color: mode === "dark" ? "white" : "black"}}>
                <div className="selectMode">
                    <input type="radio" id="light" name="mode" value="light" checked={mode === "light"} onChange={(event) => setMode(event.target.value)} />
                    <label htmlFor="light">Light</label>
                    <input type="radio" id="dark" name="mode" value="dark" checked={mode === "dark"} onChange={(event) => setMode(event.target.value)} />
                    <label htmlFor="dark">Dark</label>
                </div>
                <div className="input" style={{color: mode === "dark" ? "white" : "black",}}>{value}</div>
                <div className="buttons">
                    <button className="btn" id="clear" onClick={ClearValue}>Clear</button>
                    <button className="btn" id="backspace" onClick={removeValue}>C</button>
                    <button className="btn" onClick={() => updateValue("/")}>/</button>
                    <button className="btn" onClick={() => updateValue("7")}>7</button>
                    <button className="btn" onClick={() => updateValue("8")}>8</button>
                    <button className="btn" onClick={() => updateValue("9")}>9</button>
                    <button className="btn" onClick={() => updateValue("*")}>x</button>
                    <button className="btn" onClick={() => updateValue("4")}>4</button>
                    <button className="btn" onClick={() => updateValue("5")}>5</button>
                    <button className="btn" onClick={() => updateValue("6")}>6</button>
                    <button className="btn" onClick={() => updateValue("-")}>-</button>
                    <button className="btn" onClick={() => updateValue("1")}>1</button>
                    <button className="btn" onClick={() => updateValue("2")}>2</button>
                    <button className="btn" onClick={() => updateValue("3")}>3</button>
                    <button className="btn" onClick={() => updateValue("+")}>+</button>
                    <button className="btn" onClick={() => updateValue("0")}>0</button>
                    <button className="btn" onClick={() => updateValue(".")}>.</button>
                    <button className="btn" id="equal" onClick={getResult}>=</button>
                </div>
            </div>
        </div>
    );
}

export default App;
