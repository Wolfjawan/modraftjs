import React from "react";

export default ({ selectImage, imgSrc, showImageLoading }) => {
  return (
    <div>
      <div className="toolbar-controls-image-modal-upload-option">
        <label
          htmlFor="file"
          className="toolbar-controls-image-modal-upload-option-label"
        >
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={imgSrc}
              className="toolbar-controls-image-modal-upload-option-image-preview"
            />
          ) : showImageLoading ? (
            "Lodging"
          ) : (
            "Upload"
          )}
        </label>
      </div>
      <input
        type="file"
        id="file"
        accept={"image/gif,image/jpeg,image/jpg,image/png,image/svg"}
        onChange={selectImage}
        className="toolbar-controls-image-modal-upload-option-input"
      />
    </div>
  );
};
