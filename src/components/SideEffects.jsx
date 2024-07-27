 import { useEffect, useState } from "react";

// import { useEffect } from "react";

// const SideEffect = () => {
//     let [cartItems, setcartitems] = useState(null);

//     console.log("comp rendered");

//     useEffect(() => {
//         fetch("https://dummyjson.com/carts")
//             .then(res => res.json())
//             .then((data) => {
//                 console.log(data.carts);
//                 setcartitems(data.carts);
//             })
//     }, [])

//     return (<div>
//         <h1>side effects in React </h1>
//     </div>);
// }

// export default SideEffect;



const SideEffect = () => {

    let [count1, setCount1] = useState(1);
    let [text, setText] = useState("page 1");

    useEffect(() => {
        document.title = text;
        console.log("title is change");
    }, [text])

    return (<div>
        <h1>Side effects in React</h1>
        <hr />
        <h1>Count 1: {count1}</h1>
        <hr />
        <button onClick={() => { setCount1(count1 + 1) }}>change c1</button>
        <button onClick={() => { setText(text + 1) }}>change title</button>
    </div>)

}
export default SideEffect;













