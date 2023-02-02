import React from 'react'

export default function Myper() {
    return (
        <div>
            <h1>My Permits</h1>

            <div className="table-responsive container">
                <table className="table table-bordered w-auto" style={{marginBottom:"50px"}}>
                    <tbody>
                        <tr>
                            <th scope="row">Full Name</th>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th scope="row">Gender</th>

                        </tr>
                        <tr>
                            <th scope="row">Date of Birth</th>

                        </tr>
                        <tr>
                            <th scope="row">Permanent Address</th>

                        </tr>
                        <tr>
                            <th scope="row">Temporary Address</th>

                        </tr>
                        <tr>
                            <th scope="row">Mobile Number</th>

                        </tr>
                        <tr>
                            <th scope="row">License Number</th>

                        </tr>

                        <tr>
                            <th scope="row">Registration Number</th>

                        </tr>
                        <tr>
                            <th scope="row">Type of Vehicle</th>

                        </tr>
                        <tr>
                            <th scope="row">Place</th>

                        </tr>
                        <tr>
                            <th scope="row">Departure Date</th>

                        </tr>
                        <tr>
                            <th scope="row">Reason</th>

                        </tr>
                    </tbody>
                </table>
                <button type="button" className="printbtn btn btn-lg" onClick={Print} style={{marginLeft:"auto",marginRight:"auto"}}> Print</button>
<br/>
<br/>
            </div>
        </div>
    )
}
const Print = () =>{    
    window.print();
  }
  