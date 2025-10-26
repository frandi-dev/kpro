const Modal = ({ id = "form", title, children, action }) => {
  return (
    <div
      className="modal fade"
      id={`${id}Modal`}
      tabIndex={-1}
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${id}Label`}>
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                action(false);
              }}
            />
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
