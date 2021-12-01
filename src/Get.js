import React from 'react'

const Get = () => {
    return (
        <div>
            <table className="table table-striped table-inverse table-responsive" style={{border:'2px solid green'}}>
                <thead className="thead-inverse">
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
                            <td>idly</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>hari</td>
                            <td>idly</td>
                        </tr>
                    </tbody>
            </table>
        </div>
    )
}

export default Get
