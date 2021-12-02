import axios from 'axios'
import React from 'react'

const SetTimeoutWithoutCancellngAPI = () => {
    const waittime=5000;
    const withoutCancellingAPI=async()=>{
            const handleError=error=>{
                    if(!error.handled){
                        if(error.timedout){
                            console.log("error timedout",error.timedout)
                        }else{
                            console.log("fail",error.message)
                            error.handled=true
                            throw error;
                        }
                    }
            }
            const makerequest= async()=>{
                try {
                    const result=await axios({
                        urll:"https://jsonplaceholder.typicode.com/users",
                        headers:{
                            accept:"application/json",
                            "content-type":"application/json"
                        }
                    });
                    console.log("Success!",JSON.stringify(result.data,null,2));
                } catch (error) {
                    handleError(error)
                }
            }
            const timer=new Promise((_,reject)=>setTimeout(reject,waittime,{timedout:'request taking long time'}));
            try {
                await Promise.race([makerequest(),timer])
            } catch (error) {
                handleError(error)
            }
    }
    return (
        <div>
            <h3>How to set a TimedOut using axios without cancelling api call.</h3>
            <button onClick={()=>withoutCancellingAPI()} 
            style={{color:'white',background:'green',padding:'8px'}}>click</button>
        </div>
    )
}

export default SetTimeoutWithoutCancellngAPI
