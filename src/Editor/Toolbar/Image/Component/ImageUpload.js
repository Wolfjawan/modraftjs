import React from "react";

export default ({
  classNames,
  fileUploadClick,
  onDragEnter,
  stopPropagation,
  onImageDrop,
  dragEnter,
  imgSrc,
  selectImage
}) => {
  return (
    <div onClick={fileUploadClick}>
      <div
        onDragEnter={onDragEnter}
        onDragOver={stopPropagation}
        onDrop={onImageDrop}
        className={classNames("toolbar-controls-image-modal-upload-option", {
          "toolbar-controls-image-modal-upload-option-highlighted": dragEnter
        })}
      >
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
          ) : (
            imgSrc || "Upload"
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
