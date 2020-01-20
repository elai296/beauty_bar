import React from 'react';

export default function deleteConfirmationModal(props) {
  return (
    <div className="modal fade text-dark" id="deleteConfirm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content text-black">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center pb-5">
            Are you sure you want to remove the item?
            <div>
              <button className="mr-3 mt-3"onClick={props.delete} data-toggle="modal" data-target="#deleteConfirm">Yes</button>
              <button className="mt-3" data-toggle="modal" data-target="#deleteConfirm">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
