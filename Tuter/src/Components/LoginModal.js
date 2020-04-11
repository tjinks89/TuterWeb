import React, { Component } from "react";

class LoginModal extends Component 
{
    render() 
    {
        return(
            <div>
                {/* <!-- Button to Open the Modal --> */}
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                  Open modal
                </button>
                {/* The Modal */}
                <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">

                        {/* The Modal Header*/}
                        <div class="modal-header">
                          <h4 class="modal-title">Modal Heading</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* The Modal body*/}
                        <div class="modal-body">
                          Modal body..
                        </div>

                        {/* The Modal footer*/}
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
} export default LoginModal;
