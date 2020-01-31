import React from "react";

export default ({
  addImageFromState,
  doCollapse,
  imgSrc,
  height,
  width,
  alt
}) => {
  return (
    <span className="toolbar-controls-image-modal-btn-section">
      <button
        className="toolbar-controls-image-modal-btn"
        onClick={addImageFromState}
        disabled={!imgSrc || !height || !width || !alt}
      >
        Add
      </button>
      <button className="toolbar-controls-image-modal-btn" onClick={doCollapse}>
        Cancel
      </button>
    </span>
  );
};
