import axios from 'axios'
import React from 'react'

const SetTimeoutWithoutCancellngAPI = () => {
    const waittime=5000;
    const withoutCancellingAPI=async()=>{
        const handleError = error => {
            // this makes sure that the FAIL output isn't repeated in the case when there's a failure before the timeout
            if (!error.handled) {
                if (error.timedout) {
                    console.log("TIMEDOUT", error.timedout);
                } else {
                    console.log("FAIL!", error.message);
                    error.handled = true;
                    throw error;
                }
            }
        };
            const makeRequest= async()=>{
                try {
                    const result = await axios({
                        url: "https://jsonplaceholder.typicode.com/todos/1",
                        headers: {
                            accept: "application/json",
                            "Content-Type": "application/json",
                        }
                    });
                    console.log("SUCCESS!", JSON.stringify(result.data, null, 2));
                } catch(error) {
                    return handleError(error);
                }    
            };
            const timer = new Promise((_, reject) => setTimeout(reject, waittime, {timedout: "request taking a long time"}));
            try {
                await Promise.race([makeRequest(), timer]);
            } catch(error) {
                handleError(error);
            }
    };
    return (
        <div>
            <h3>How to set a TimedOut using axios without cancelling api call.</h3>
            <button onClick={()=>withoutCancellingAPI()} 
            style={{color:'white',background:'green',padding:'8px'}}>click</button>
        </div>
    )
}

export default SetTimeoutWithoutCancellngAPI
