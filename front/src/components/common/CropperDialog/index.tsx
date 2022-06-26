import React, { useState } from "react";
import classNames from "classnames";
import "./style.css";

const CropperDialog: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>(
    "https://s.sweetydate.com/blog/ukr-women-guide/ukr-ladies1%20title.jpg"
  );

  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      <label htmlFor="image">
        <img
          src={currentImage}
          style={{ cursor: "pointer" }}
          width="150"
          alt="Оберіть фото"
        />
      </label>
      <input type="file" className="d-none" id="image" />

      <div className={classNames("modal", {"custom-modal": show})}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Редагування фото</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Скасувать
              </button>
              <button type="button" className="btn btn-primary">
                Обрати фото
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CropperDialog;
