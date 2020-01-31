import React from "react";

export default ({ imgSrc, updateValue }) => {
  return (
    <div>
      <div className="toolbar-controls-image-modal-url-section">
        <input
          className="toolbar-controls-image-modal-url-input"
          placeholder="URL"
          name="imgSrc"
          onChange={updateValue}
          onBlur={updateValue}
          value={imgSrc}
        />
        <span className="toolbar-controls-image-mandatory-sign">*</span>
      </div>
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgSrc}
          className="toolbar-controls-image-modal-upload-option-image-preview"
        />
      )}
    </div>
  );
};
