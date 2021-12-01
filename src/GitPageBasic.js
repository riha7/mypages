import React from 'react'

const GitPageBasic = () => {
    return (
        <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',border:'2px solid tomato',alignItems:'center'}}>
            <h1>git page basic</h1>
            <p>i am in git project</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>name</th>
                        <th>item</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>hari</td>
                        <td>idily</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>wada</td>
                        <td>riha</td>
                    </tr>
                </tbody>
            </table>
            </div>

        </div>
    )
}

export default GitPageBasic
