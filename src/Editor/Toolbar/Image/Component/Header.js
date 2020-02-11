import React from "react";

export default ({ showImageOptions, uploadHighlighted, uploadImage }) => {
  return (
    <div className="toolbar-controls-image-modal-header">
      <span
        onClick={() => {
          showImageOptions(false);
        }}
        style={{
          borderBottomColor: uploadHighlighted ? "#f1f1f1" : "#008cff"
        }}
        className="toolbar-controls-image-modal-header-option"
      >
        URL
      </span>
      {uploadImage && (
        <span
          onClick={() => {
            showImageOptions(true);
          }}
          style={{
            borderBottomColor: !uploadHighlighted ? "#f1f1f1" : "#008cff"
          }}
          className="toolbar-controls-image-modal-header-option"
        >
          Upload
        </span>
      )}
    </div>
  );
};
