import { Component, useState } from "react";

// const StateManagement = () => {

//     let [val , setVal] = useState(10);

//     console.log("component rendered");

//     return ( <div>
//                 <h1>State management in React</h1>
//                 <hr />
//                 <h2>Value is {val}</h2>
//                 <button onClick={ ()=>{ setVal(val+0) } }> + </button>
//             </div> );
// }

// export default StateManagement;



class StateManagement extends Component {
    constructor() {
        super();
        this.state = { val1: 10 }
    }
    render() {
        console.log("component rendered");

        return (<div>
            <h1>state management in class component</h1>
            <h1>Value 1 is : {this.state.val1} </h1>
            <hr />
            <button onClick={() => { this.setState({ val1: this.state.val1 + 0 }) }}> change v1 </button>
        </div>)
    }
}

export default StateManagement;