import React from 'react'

export default function Applyper() {
    return (
        <div>
            <div className="container">

                <h1>Permit Application Form</h1>
                <p>Fill the form<i className="fa-solid fa-hand-back-point-down"></i></p>



                <form className="form-horizontal">
                    <div className="form-group ">
                        <label className="control-label col-sm-2" for="name"><b>Full Name</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Fullname" name="name"
                            required /></div>
                    </div>


                    <div className="form-group">
                        <label className="control-label col-sm-2" for="gender"><b>Gender</b></label><br />
                        <input type="radio" id="f" name="gender" value="Female" />
                        <label for="f">Female</label><br />
                        <input type="radio" id="m" name="gender" value="Male" />
                            <label for="m">Male</label><br />
                            <input type="radio" id="o" name="gender" value="Other" />
                                <label for="o">Other</label>

                    </div>


                            <div className="form-group ">
                                <label className="control-label col-sm-2" for="dob"><b>Date of Birth</b></label>
                                <div className="col-sm-12"><input type="date" className="form-control" name="dob" required /></div>
                            </div>


                            <div className="form-group">
                                <label className="control-label col-sm-2" for="permAddress"><b>Permanent Address</b></label>
                                <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Permanent Address"
                                    name="permAddress" required /></div>
                            </div>


                            <div className="form-group">
                                <label className="control-label col-sm-2" for="tempAddress"><b>Temporary Address</b></label>
                                <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Temporary Address"
                                    name="tempAddress" required /></div>
                            </div>


                            <div className="form-group ">
                                <label className="control-label col-sm-2" for="mb"><b>Mobile No</b></label>
                                <div className="col-sm-12"><input type="number" className="form-control" min="0" max="9999999999"
                                    placeholder="Enter mobile no" name="mb" required /></div>
                            </div>





                            <div className="form-group ">
                                <label className="control-label col-sm-2" for="lc"><b>License No</b></label>
                                <div className="col-sm-12"><input type="number" className="form-control" min="0" max="99999999999999"
                                    placeholder="Enter License no" name="rc" required /></div>
                            </div>


                            <div className="form-group ">
                                <label className="control-label col-sm-2" for="rc"><b>RC No</b></label>
                                <div className="col-sm-12"><input type="number" className="form-control" min="0000" max="9999"
                                    placeholder="Enter RC no" name="rc" required /></div>
                            </div>




                            <div className="form-group ">
                                <label className="control-label col-sm-2" for="type"><b>Type of Vehicle</b></label>
                                <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter type of vehicle"
                                    name="type" required /></div>
                            </div>


                            <div className="form-group ">
                                <label className="control-label col-sm-2" for="place"><b>Place</b></label>
                                <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Place" name="place"
                                    required /></div>
                            </div>




                            <div className="form-group">
                                <label className="control-label col-sm-2" for="dt"><b>Departure Date</b></label>
                                <div className="col-sm-12"><input type="date" className="form-control" name="dt" /></div>
                            </div>


                            <div className="form-group ">
                                <label className="control-label col-sm-2" for="reason"><b>Reason</b></label>
                                <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Reason" name="reason"
                                    required /></div>
                            </div>

                            <div className="form-group">
                                <label for="photo"><b>Upload photo</b></label>
                                <input type="file" className="form-control-file" id="photo" />
                            </div>

                            <div className="form-group">
                                <label for="aadhar"><b>Upload aadhar</b></label>
                                <input type="file" className="form-control-file" id="aadhar" />
                            </div>


                            <div className="form-group">
                                <label for="aadhar"><b>Upload License</b></label>
                                <input type="file" className="form-control-file" id="lic" />
                            </div>


                            <div className="form-group">
                                <label for="rc"><b>Upload RC</b></label>
                                <input type="file" className="form-control-file" id="lic" />
                            </div>

                            <div style={{ width: "auto", justifyContent: "center", display: "flex" }} className="row">
                        <input style={{ width: "100px", marginRight: "5px" }} type="reset" value="Reset" />
                        <input style={{ width: "100px" }} type="submit" className="btn btn-success" data-bs-toggle="modal"
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
