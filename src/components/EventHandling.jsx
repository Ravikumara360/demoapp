const EventHandling = () => {
    let x = () => {
        console.log("Non parametrised function")
    }
    let y = (num) => {
        console.log(num + "parametrised function")
    }
    return (<div>
        <h1>Event handling in React</h1>
        <hr />
        {/* If a function is with zero parameter, then pass only functions refrences*/}
        <button onClick={x}>invoke x</button>
        
        {/* If a function is with parameter, use call fubction and invoke the same*/}
        <button onClick={() => { y(10) }}>invoke y</button>
    </div>);
}

export default EventHandling;