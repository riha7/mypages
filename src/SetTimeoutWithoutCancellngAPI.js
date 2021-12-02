import axios from 'axios';
import React from 'react'

const SetTimeoutWithoutCancellngAPI = () => {
    const fetchRqstApi=async()=>{
        const waittime=5000;
        const handleError=error=>{
                if(!error.handled){
                    if (error.timedout) {
                        console.log("TimedOut!",error.timedout)
                    } else {
                        console.log("FAIL",error.message);
                        error.handled=true;
                        throw error
                    }
                }
        };
        const makeRqest=async()=>{
                try {
                    const result = await axios({
                        url:"https://jsonplaceholder.typicode.com/todos/1",
                        headers:{
                            accept:"application/json",
                            "content-type":"application/json"
                        }
                    });
                    console.log("Success!",JSON.stringify(result.data,null,2));
                } catch (error) {
                    handleError(error)
                }
        };
        const timer=new Promise((_,reject)=>setTimeout(reject,waittime,{timedout:'rqst taking to long time'}));
        try {
            await Promise.race([makeRqest(),timer])
        } catch (error) {
            handleError(error)
        }
    }
    return (
        <div>
            <h1>How to set TimeOut() using axios without cancelling api Call..</h1>
            <button style={{background:'green',color:'white',padding:'10px'}}  
            onClick={()=>fetchRqstApi()}>ClickTOGetData</button>
        </div>
    )
}

export default SetTimeoutWithoutCancellngAPI
