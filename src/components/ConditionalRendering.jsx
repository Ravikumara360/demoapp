import { useState } from "react";
const ConditiinalRendering = () => {
    let [a, setA] = useState(10);
    return (<div>
        <h1>Conditional Rendering in React</h1>
        <hr />
        <h2>A value is:{a}</h2>
        {a % 2 == 0 ? <h1>num is even</h1> : <h1>num is odd</h1>}
        <button onClick={() => { setA(a + 1) }}>change a</button>
    </div>)
}
export default ConditiinalRendering;