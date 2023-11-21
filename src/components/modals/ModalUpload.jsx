import React from "react";
import DragAndDrop from "../inputs/DragAndDrop";

export function ModalUpload({ show, close }) {
  const modalStyle = {
    display: show ? "block" : "none",
  };

  const backdropBlur = {
    display: show ? "block" : "none",
    backdropFilter: show ? "blur(10px)" : "none",
    transition: "backdrop-filter 0.3s ease-out",
  };
  return (
    <>
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        style={backdropBlur}
      ></div>
      <div
        className={`modal ${show ? "show" : ""}`}
        style={modalStyle}
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <h3
              className="modal-title fw-bold py-3  text-center text-uppercase"
              style={{ letterSpacing: "10px" }}
            >
              Upload Files
            </h3>
            <div className="modal-body">
<DragAndDrop/>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary"
                  onClick={close}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalUpload;
