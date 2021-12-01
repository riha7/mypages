import React,{useState} from 'react'


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
            <form onSubmit={handleSubmit} autoComplete='off'>
                <input type="text" name="username" value={username} onChange={handleInput} /> <br />
                <input type="text" name="pwd" value={pwd} onChange={handleInput} />
                <button>Click</button>
            </form>
            {JSON.stringify(state)}
        </div>
    )
}

export default GitPageBasic
