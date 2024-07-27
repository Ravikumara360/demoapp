//import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import Electronics from './components/Electronics';
import Fashion from './components/Fashion';
import Home from './components/Home';
 import Navbar from './components/Nav';


// import Custom from './Custom';
// import Home from './Home';
// import Fragmentss from './components/Fragmentss';
//import EventHandling from './components/EventHandling';
//import StateManagement from './components/StateManagement';
//import ConditiinalRendering from './components/ConditionalRendering';
//import Mode from './components/Mode';
//import Navbar from './components/Navbar';
// import SideEffect from './components/SideEffects';
//import DisplayMultipleData from './components/DisplayMultipleData';



// function App() {
//   let val1=10;
//   let val2="hello world";
//   let val3=true;
//   let val4=undefined;
//   let val5=NaN;
//   let val6=null;
//   let val7=[10,20,30];
//   let val8={x:100, y:200, z:300};

//   return (
//     <div className="App">
//      <header className="App-header"> 
//         <Custom />
//         <Home/>
//        <Navbar/>
//         <div classname="fragmentss">
//         <Fragmentss/>
//         </div>
        
//        </header>
//        <h2> dynamic value:{val2} </h2>
//     </div>
//   );
// }

//  export default App; 

function App(){
  return(
    <div className="App">
       <header className="App-header"> 
       {/* <EventHandling/> */}
       {/* <StateManagement/> */}
       {/* <ConditiinalRendering/> */}
       {/* <Mode/> */}
     {/* <Navbar/> */}
     {/* <SideEffect/> */}
     {/* <DisplayMultipleData/> */}
     <Home/>
     <Electronics/>
     <Fashion/>
     <Books/>
     <Navbar/>
        </header> 
       </div>
  )
}
export default App; 