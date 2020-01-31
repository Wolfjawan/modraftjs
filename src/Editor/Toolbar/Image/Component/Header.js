import React from "react";

export default ({
  classNames,
  showImageURLOption,
  showImageUploadOption,
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
          className={classNames("toolbar-controls-image-modal-header-label", {
            "toolbar-controls-image-modal-header-label-highlighted": !uploadHighlighted
          })}
        />
      </span>
      <span
        onClick={showImageUploadOption}
        className="toolbar-controls-image-modal-header-option"
      >
        Upload
        <span
          className={classNames("toolbar-controls-image-modal-header-label", {
            "toolbar-controls-image-modal-header-label-highlighted": uploadHighlighted
          })}
        />
      </span>
    </div>
  );
};
