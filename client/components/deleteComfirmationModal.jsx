import React from 'react';

export default function deleteConfirmationModal() {
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
            Your item has been deleted.
          </div>
        </div>
      </div>
    </div>
  );
}
