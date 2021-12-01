import axios from 'axios';
import React from 'react'

const Getdata = () => {
    const fetchData= async()=>{
        const waitTime=5000;
        setTimeout(()=>{
            console.log('request to takiing long time');
        },waitTime)
        try {
            const result = await axios({
                url:"https://jsonplaceholder.typicode.com/todos/1",
                headers:{
                    accept:'application/json',
                    "content-type":"application/json"
                }
            });
            console.log("success!",JSON.stringify(result.data,null,2))
        } catch (error) {
            console.log("error displayed",error.message);
        }
    }
    return (
        <div>
            <center>
                <p>get Data</p>
                <button onClick={()=>fetchData()}>Click to Get Data</button>
            </center>
        </div>
    )
}

export default Getdata
