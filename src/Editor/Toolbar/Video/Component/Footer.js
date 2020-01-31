import React from "react";

export default ({
  addVideoCodeFromState,
  doCollapse,
  videoCode,
  height,
  width,
  title
}) => {
  return (
    <span className="toolbar-controls-video-modal-btn-section">
      <button
        className="toolbar-controls-video-modal-btn"
        onClick={addVideoCodeFromState}
        disabled={!videoCode || !height || !width || !title}
      >
        Add
      </button>
      <button className="toolbar-controls-video-modal-btn" onClick={doCollapse}>
        Cancel
      </button>
    </span>
  );
};
