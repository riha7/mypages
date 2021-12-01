import axios from 'axios';
import React from 'react'

const DataApintigration = () => {
    const fetchData=async()=>{
            setTimeout(() => {
                console.log("taking long time to execute");
            }, 5000);
            try {
                const result = await axios({
                    url:"https://jsonplaceholder.typicode.com/todos/1",
                    headers:{
                        accept:"application/json",
                        "content-type":"application/json"
                    }
                });
                console.log("success",JSON.stringify(result.data,null,1))
            } catch (error) {
                console.log("fail!",error.message);
            }
    }
    return (
        <div>
            <h1 style={{background:'green',color:'white'}}>API intigration start.......</h1>
            <center>
                <button onClick={()=>fetchData()}>CLikc to get data</button>
            </center>
        </div>
    )
}

export default DataApintigration
