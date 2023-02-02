import React from 'react'

export default function Applyrc() {
    return (
        <div>

            <h1>Vehicle Registration Form</h1>
            <p>Fill the form<i className="fa-solid fa-hand-back-point-down"></i></p>


            <div className="container">
                <form className="form-horizontal">
                    <div className="form-group ">
                        <label className="control-label col-sm-12" htmlFor="name"><b>Full Name</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Fullname" name="name"
                            required /></div>
                    </div>


                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="gender"><b>Gender</b></label><br />
                        <input type="radio" id="f" name="gender" value="Female" />
                        <label htmlFor="f">Female</label><br />
                        <input type="radio" id="m" name="gender" value="Male" />
                        <label htmlFor="m">Male</label><br />
                        <input type="radio" id="o" name="gender" value="Other" />
                        <label htmlFor="o">Other</label>

                    </div>


                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="age"><b>Age</b></label><br />
                        <div className="col-sm-12"><input type="number" className="form-control" min="18" placeholder="Enter Age"
                            name="age" required /></div>
                    </div>

                    <div className="form-group ">
                        <label className="control-label col-sm-12" htmlFor="tr"><b>Temporary Reg No</b></label>
                        <div className="col-sm-12"><input type="number" className="form-control" min="0000" max="9999"
                            placeholder="Enter temporary reg. no" name="tr" required /></div>
                    </div>



                    <div className="form-group">
                        <label className="control-label col-sm-12" htmlFor="permAddress"><b>Permanent Address</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Permanent Address"
                            name="permAddress" required /></div>
                    </div>


                    <div className="form-group">
                        <label className="control-label col-sm-12" htmlFor="tempAddress"><b>Temporary Address</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Temporary Address"
                            name="tempAddress" required /></div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-12" htmlFor="named"><b>Name of the dealer or manufacturer from whom the
                            vehicle was purchased</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control"
                            placeholder="Enter Name of the dealer or manufacturer from whom the vehicle was purchased"
                            name="named" required /></div>
                    </div>


                    <div className="form-group">
                        <label className="control-label col-sm-12" htmlFor="addd"><b>Address of the dealer or manufacturer from whom the
                            vehicle was purchased</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control"
                            placeholder="Enter address of the dealer or manufacturer from whom the vehicle was purchased"
                            name="addd" required /></div>
                    </div>

                    {/* <!-- can add fuel used and seating capacity --> */}
                    <div className="form-group ">
                        <label className="control-label col-sm-2" htmlFor="mb"><b>Mobile No</b></label>
                        <div className="col-sm-12"><input type="number" className="form-control" min="0" max="9999999999"
                            placeholder="Enter mobile no" name="mb" required /></div>
                    </div>

                    <div className="form-group ">
                        <label className="control-label col-sm-12" htmlFor="className"><b>className of Vehicle</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter className of vehicle"
                            name="className" required /></div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-12" htmlFor="manu"><b>Month and year of purchased</b></label>
                        <div className="col-sm-12"><input type="month" className="form-control" name="manu" /></div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="photo"><b>Upload photo</b></label>
                        <input type="file" className="form-control-file" id="photo" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="aadhar"><b>Upload aadhar</b></label>
                        <input type="file" className="form-control-file" id="aadhar" />
                    </div>



                    <div style={{ width: "auto", justifyContent: "center", display: "flex" }} className="row">
                        <input style={{ width: "100px", marginRight: "5px" }} type="reset" value="Reset" />
                        <input style={{ width: "100px" }} type="submit" className="btn btn-success btn-lg" data-bs-toggle="modal"
                            data-bs-target="#myModal" value="Submit" />


                    </div>
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">



                                {/* <!-- Modal body --> */}
                                <div className="modal-body">
                                    <p>Your form has been successfully submitted.</p>
                                </div>
                                <br />


                                {/* <!-- Modal footer --> */}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger " data-bs-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br />
                </form>
            </div>
            <br />

            <br />

        </div>
    );
}
