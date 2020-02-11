import React from "react";

export default ({
  showImageURLOption,
  // showImageUploadOption,
  uploadHighlighted
}) => {
  return (
    <div className="toolbar-controls-image-modal-header">
      <span
        onClick={showImageURLOption}
        className="toolbar-controls-image-modal-header-option"
      >
        URL
        <span
          className={`toolbar-controls-image-modal-header-label`}
        />
      </span>
      {/* <span
        onClick={showImageUploadOption}
        className="toolbar-controls-image-modal-header-option"
      >
        Upload
        <span
          className={`toolbar-controls-image-modal-header-label`}
        />
      </span> */}
    </div>
  );
};
