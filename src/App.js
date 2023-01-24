import { useState, useEffect } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import RacerDisplay from "./components/RacerDisplay";

function App(props) {

    let buttons = [
        {color:'primary', step: 1},
        {color:'secondary', step: 10},
        {color:'success', step: 100},
        {color:'danger', step: 1000},
    ]

    const [count, setCount] = useState(0);    
    const [myName, setMyaName] = useState('');
    const [myCity, setMyCity] = useState('');
    const [racers, setRacers] = useState([]);
        
    function handleClick(step){
        setCount(count + step)
    };

    function updateUserInfo(username, usercity){
        setMyaName(username)
        setMyCity(usercity)
    };

    // Create an effect 
    useEffect(() => {
        console.log('useEffect effect callback has been called')
        fetch("http://ergast.com/api/f1/2022/5/driverStandings.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            setRacers(racerStandings);
        })
    }, [])

    return (
        <>
            <Navbar name={myName} city={myCity} updateUser={updateUserInfo} />
            <div className="container">
                <h1>Hello {myName}, Count: {count}</h1>
                {buttons.map((button, idx) => <Button color={button.color} step={button.step} key={idx} handleClick={handleClick}/>)}
                <RacerDisplay racers={racers}/>
            </div>           
        </>
        );
};

export default App;
