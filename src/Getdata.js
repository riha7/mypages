import axios from 'axios'
import React from 'react'

const Getdata = () => {
    const fetchRequest=async()=>{
        setTimeout(() => {
            console.log("takiing long time to display....");
        }, 5000);
            try {
                const result=await axios({
                    url:"https://jsonplaceholder.typicode.com/todos/1",
                    headers:{
                        accept:"application/json",
                        "content-type":"application/json"
                    }
                });
                console.log('success!',JSON.stringify(result.data,null,2))
            } catch (error) {
                console.log("failure",error.message)
            }
    }
    return (
        <div>
            <center>
                <button onClick={()=>fetchRequest()}>Click to gget data visible to console</button>
            </center>
        </div>
    )
}

export default Getdata
