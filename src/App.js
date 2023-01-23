import Navbar from "./components/Navbar";

function App() {
    let myName = 'Terry'
    return (
        <>
            <Navbar name={myName} city="Milton" test={123}/>
            <div className="container">
                <h1>Hello {myName} {10*5} </h1>
            </div>             
        </>
        );
};

export default App;
