import React,{useState} from 'react'
import Getdata from './Getdata';

const GitPageBasic = () => {
    const [state, setstate] = useState({
        username:'',
        pwd:''
    })
    const {username,pwd} = state;
    const handleInput=(e)=>{
            let newdata = {...state}
            newdata[e.target.name] = e.target.value
            setstate(newdata)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        let newdata={'username':username,'pwd':pwd}
        console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={username} onChange={handleInput} /> <br />
                <input type="text" name="pwd" value={pwd} onChange={handleInput} />
                <button>Click</button>
            </form>
            <Getdata />
        </div>
    )
}

export default GitPageBasic
