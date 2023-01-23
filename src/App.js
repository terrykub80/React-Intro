import { useState } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App(props) {
    let myName = 'Terry'
    let buttons = [
        {color:'primary', step: 1},
        {color:'secondary', step: 10},
        {color:'success', step: 100},
        {color:'danger', step: 1000},
    ]

    const [count, setCount] = useState(0);    
        
    function handleClick(step){
        setCount(count + step)
    };

    return (
        <>
            <Navbar name={myName} city="Milton" test={123}/>
            <div className="container">
                <h1>Hello {myName}, Count: {count}</h1>
                {buttons.map((button, idx) => <Button color={button.color} step={button.step} key={idx} handleClick={handleClick}/>)}
            </div>           
        </>
        );
};

export default App;
