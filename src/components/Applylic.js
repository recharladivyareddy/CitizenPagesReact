import React from 'react'

export default function Applylic() {
    return (
        <div>
            <h1>License Application Form</h1>
            <p>Fill the form<i className="fa-solid fa-hand-back-point-down"></i></p>


            <div className="container">
                <form className="form-horizontal">
                    <div className="form-group ">
                        <label className="control-label col-sm-2" for="name"><b>Full Name</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Fullname" name="name"
                            required /></div>
                    </div>

                    <div className="form-group ">

                        <label className="control-label col-sm-2" for="fname"><b>Father Name</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Father name"
                            name="fname" required /></div>
                    </div>



                    <div className="form-group ">
                        <label className="control-label col-sm-2" for="dob"><b>Date of Birth</b></label>
                        <div className="col-sm-12"><input type="date" className="form-control" name="dob" required /></div>
                    </div>


                    <div className="form-group ">
                        <label className="control-label col-sm-2" for="mb"><b>Mobile No</b></label>
                        <div className="col-sm-12"><input type="number" className="form-control" min="0" max="9999999999"
                            placeholder="Enter mobile no" name="mb" required /></div>
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

                    <div className="form-group">
                        <label className="control-label col-sm-6" for="edu"><b>Educational Qualification</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control"
                            placeholder="Enter Educational Qualification" name="edu" required /></div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-6" for="idm"><b>Identification Marks</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter Identification Marks"
                            name="idm" required /></div>
                    </div>




                    <div className="form-group ">
                        <label className="control-label col-sm-2" for="type"><b>Type of Vehicle</b></label>
                        <div className="col-sm-12"><input type="text" className="form-control" placeholder="Enter type of vehicle"
                            name="type" required /></div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" for="bg"><b>Blood Group</b></label><br />
                        <input type="radio" id="ap" name="bg" value="A+" />
                        <label for="ap">A+</label><br />
                        <input type="radio" id="op" name="bg" value="O+" />
                        <label for="ap">O+</label><br />
                        <input type="radio" id="bp" name="bg" value="B+" />
                        <label for="ap">B+</label><br />
                        <input type="radio" id="abp" name="bg" value="AB+" />
                        <label for="ap">AB+</label><br />
                        <input type="radio" id="an" name="bg" value="A-" />
                        <label for="ap">A-</label><br />
                        <input type="radio" id="on" name="bg" value="O-" />
                        <label for="ap">O-</label><br />
                        <input type="radio" id="bn" name="bg" value="B-" />
                        <label for="ap">B-</label><br />
                        <input type="radio" id="abn" name="bg" value="AB-" />
                        <label for="ap">A</label><br />

                    </div>

                    <div className="form-group">
                        <label for="photo"><b>Upload photo</b></label>
                        <input type="file" className="form-control-file" id="photo" />
                    </div>

                    <div className="form-group">
                        <label for="aadhar"><b>Upload aadhar</b></label>
                        <input type="file" className="form-control-file" id="aadhar" />
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
    )
}
