import React, { Fragment } from "react";

export default ({ updateValue, height, width, title }) => {
  return (
    <Fragment>
      <div className="toolbar-controls-video-modal-size">
        <span className="toolbar-controls-video-modal-title-lbl">Title</span>
        <input
          onChange={updateValue}
          onBlur={updateValue}
          value={title}
          name="title"
          className="toolbar-controls-video-modal-title-input"
          placeholder="title"
        />
        <span className="toolbar-controls-video-mandatory-sign">*</span>
      </div>
      <div className="toolbar-controls-video-modal-size">
        &#8597;&nbsp;
        <input
          onChange={updateValue}
          onBlur={updateValue}
          value={height}
          name="height"
          className="toolbar-controls-video-modal-size-input"
          placeholder="Height"
        />
        <span className="toolbar-controls-video-mandatory-sign">*</span>
        &nbsp;&#8596;&nbsp;
        <input
          onChange={updateValue}
          onBlur={updateValue}
          value={width}
          name="width"
          className="toolbar-controls-video-modal-size-input"
          placeholder="Width"
        />
        <span className="toolbar-controls-video-mandatory-sign">*</span>
      </div>
    </Fragment>
  );
};
