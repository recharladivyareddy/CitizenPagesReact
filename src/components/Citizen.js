import React from 'react'
import { Link  } from 'react-router-dom';


export default function Citizen() {
  return (
    <div className="container">
      <h1>Welcome XYZ!</h1>
      <div className="box">
   
        
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-active">
              <a className="nav-link active" data-bs-toggle="tab" href="#myreg">My Registrations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#mylic">My License</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#myper">My Permits</a>
            </li>
          </ul>
        
      
    <div className="tab-content course-tab-content">
      <div id="myreg" className="container tab-pane active">
        <div className="table-responsive">
          <h2>My Vehicle Details</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Owner Name</th>
                <th scope="col">RC Number</th>
                
                <th scope="col">View More Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>TS 11 AB 1234</td>
                <td><Link to='/Myvec'>view more</Link></td>
              </tr>
              <tr>
                <th scope="row">2</th>

              </tr>
              <tr>
                <th scope="row">3</th>

              </tr>
              <tr>
                <th scope="row">4</th>

              </tr>
              <tr>
                <th scope="row">5</th>

              </tr>
              <tr>
                <th scope="row">6</th>

              </tr>
              <tr>
                <th scope="row">7</th>

              </tr>
              <tr>
                <th scope="row">8</th>

              </tr>
              <tr>
                <th scope="row">9</th>

              </tr>
              <tr>
                <th scope="row">10</th>

              </tr>
            </tbody>
          </table>


        </div>
      </div>
      <div id="mylic" className="container tab-pane fade"><br />
        <h2>My License</h2>
        <div className="table-responsive">
          <table className="table table-bordered per">
            <tbody>
              <tr>
                <th scope="row">License Number</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">Name</th>

              </tr>
              
              <tr>
                <th scope="row">Mobile Number</th>

              </tr>
              <tr>
                <th scope="row">Permanent Address</th>

              </tr>
              <tr>
                <th scope="row">Vehicle className</th>

              </tr>
              <tr>
                <th scope="row">Date of Birth</th>

              </tr>
              <tr>
                <th scope="row">Date of Issue</th>

              </tr>
              <tr>
                <th scope="row">Date of Expiry</th>

              </tr>
              
            </tbody>
          </table>
          <button type="button" className="printbtn btn btn-lg" onClick={Print} style={{marginLeft:"auto",marginRight:"auto"}}> Print</button>
<br/>

          
        </div>
      </div>
      <div id="myper" className="container tab-pane fade"><br />
        <h2>My Permits</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">RC Number</th>
                <th scope="col">View More Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>TS 11 AB 1234</td>
                <td><Link to='/Myper'>view more</Link></td>
              </tr>
              <tr>
                <th scope="row">2</th>

              </tr>
              <tr>
                <th scope="row">3</th>

              </tr>
              <tr>
                <th scope="row">4</th>

              </tr>
              <tr>
                <th scope="row">5</th>

              </tr>
              <tr>
                <th scope="row">6</th>

              </tr>
              <tr>
                <th scope="row">7</th>

              </tr>
              <tr>
                <th scope="row">8</th>

              </tr>
              <tr>
                <th scope="row">9</th>

              </tr>
              <tr>
                <th scope="row">10</th>

              </tr>
            </tbody>
          </table>
          
        </div>
      </div>

    </div>
  </div>
    </div>
  )
}
const Print = () =>{    
  window.print();
}
