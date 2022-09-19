import './App.css';
import { useState } from "react";
import { runBigtaskReducer, runBigtaskAsyncReducer } from "./utils";


function App() {
  const fixedValue = 100000000;
  const [data, setData] = useState<string>();
  const [threadType,setThreadType] = useState<string>(); 
  const [aggregatedValue, setAggregatedValue] = useState<number>();

  return (
    <div style={
      {
        textAlign:"center"
      }}>
      <h1>Assignment: Implement Web Workers</h1>
      <div style={{border:"2px solid black",textAlign:"left", padding:"5px", width:"70%", margin:"auto", lineHeight:1.5}}>
      <h2  style={{ color:'red', display:'inline'}}>
        Problem Statement: 
      </h2>
      <span style={{marginLeft:'5px',fontSize:"1.2rem",fontWeight:500}}>
          In the following problem statement a function named "runBigTaskReducer" is executed by buttons "Sync on Main thread" and "Async on Main thread".
          Click on the "Sync on Main thread" button, and then immediately try clicking on the "Print Button" or "Alerts Button". You can observe that the UI is blocking,
          "Print Button" and "Alerts Button" will not work until the function executed by "Sync on Main thread" gives the output.
          <br/>
          <br/>
          Task: Implement the concept of "web workers" in react. The function "runBigTaskReducer" should be executed using the web workers.
          The function should work on clicking "Web Worker" button. For testing, please use the "Buttons for testing UI blocking" section.
          <h4>
          Note: When the web-workers are running in the background, you can observe that there is no UI blocking and "Print/Alerts Button" will still run.
          </h4>
          

      </span>
      
      </div>
      <div className='Demo__Div' 
      >
        <h2>Buttons for running "runBigTaskReducer" function</h2>
        <button
        onClick={()=>{
          setData('loading');
          setAggregatedValue(runBigtaskReducer(fixedValue));
          setThreadType('Sync on Main thread');
        }}>
          Sync on Main thread
        </button>

        <button
        onClick={async()=>{
          setData('loading');
          setAggregatedValue(await runBigtaskAsyncReducer(fixedValue));
          setThreadType('Async on Main thread');
        }}>
          Async on Main thread
        </button>

        <button
        style={{backgroundColor:"yellow"}}
        onClick={async()=>{
          setData('loading');


          /***
           * * Write your code here...
           */


          setThreadType('Web Worker');
        }}>
          Web Worker
        </button>

        
      </div>

      <div>
        <h2>Buttons for testing UI blocking</h2>
          <button
          onClick={()=>{
            setThreadType('Print button is working...');
          }}>
            Print Button
          </button>

          <button onClick={()=>{
            alert("Button working UI not blocked...")
            setThreadType('Alert button is working...')
            }}>
            Alerts Button
          </button>
          <div style={{fontSize:"2rem", marginTop:"1rem"}}>{threadType}</div>
          {
            data ? <h2>Aggregated Data: {aggregatedValue ? aggregatedValue : "Calculating..."}
            <button onClick={()=>window.location.reload()}>Reset All</button>
            </h2>:
            <></>
          }

        </div>

    </div>
  );
}

export default App;
