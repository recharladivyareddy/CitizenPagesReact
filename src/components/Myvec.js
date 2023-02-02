import React from 'react'
import Sampledata from '../Sample.json'
export default function Myvec() {
  return (
    <div>
      <h1>My Vehicle</h1>
    



    <div className="table-responsive container">
        {/* <table className="table table-bordered w-auto">
          <tbody>
            <tr>
              <th scope="row">Full Name</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">Temporary Reg No</th>

            </tr>
            <tr>
              <th scope="row">Permanent Address</th>

            </tr>
            <tr>
              <th scope="row">Temporary Address</th>

            </tr>
            <tr>
              <th scope="row">Name of the dealer or manufacturer from whom the vehicle was purchased</th>

            </tr>
            <tr>
              <th scope="row">Address of the dealer or manufacturer from whom the vehicle was purchased</th>

            </tr>
            <tr>
              <th scope="row">Class of Vehicle</th>

            </tr>
            <tr>
                <th scope="row">Month and year of manufacture</th>
  
              </tr>
          </tbody>
        </table> */}
        <table className="table" id="Info">
        <thead>
        <tr>
            {/* <th>S.No</th> */}
            <th>Owner name</th>
            <th>Registration no.</th>
            <th>Chassis no.</th>
            <th>Registration date</th>
            {/* <th>Vehicle model</th>
            <th>RC Status</th> */}
        </tr>
        </thead>
        <tbody>
        {
            Sampledata.map( (record) => {
                let id=record.id;
                let oname =record.name;
                let rn = record.regno ;
                let cn = record.chassis;
                let rdate = record.date;
                return (<tr key={id}><td>{oname}</td><td>{rn}</td><td>{cn}</td><td>{rdate}</td></tr>);
            })
            }

    </tbody>
        
    </table>

        <button type="button" className="printbtn btn btn-lg" onClick={Print} style={{marginLeft:"auto",marginRight:"auto"}}> Print</button>

      </div>
    </div>
  )
}
const Print = () =>{    
  window.print();
}
