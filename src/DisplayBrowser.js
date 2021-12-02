import axios from 'axios'
import React, { useState,useEffect } from 'react'
//https://jsonplaceholder.typicode.com/users
const DisplayBrowser = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios({
            url:'https://jsonplaceholder.typicode.com/users',
            headers:{
                accept:'application/json',
                "content-type":"application/json"
            }
        }).then(res=>{
            console.log(res.data);
            setdata(res.data);
        })
    }, [])
    return (
        <div>
           <h2>Display Data to Browser</h2>
           <table className="table">
               <thead>
                   <tr>
                       <th>s.no</th>
                       <th>username</th>
                       <th>email</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       data.map((item,index)=>{
                           return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                           )
                       })
                   }

               </tbody>
           </table> 
        </div>
    )
}

export default DisplayBrowser
