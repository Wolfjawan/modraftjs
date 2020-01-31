import React, { Fragment } from "react";

export default ({ updateValue, alt, height, width }) => {
  return (
    <Fragment>
      <div className="toolbar-controls-image-modal-size">
        <span className="toolbar-controls-image-modal-alt-lbl">Alt Text</span>
        <input
          onChange={updateValue}
          onBlur={updateValue}
          value={alt}
          name="alt"
          className="toolbar-controls-image-modal-alt-input"
          placeholder="alt"
        />
        <span className="toolbar-controls-image-mandatory-sign">*</span>
      </div>

      <div className="toolbar-controls-image-modal-size">
        &#8597;&nbsp;
        <input
          onChange={updateValue}
          onBlur={updateValue}
          value={height}
          name="height"
          className="toolbar-controls-image-modal-size-input"
          placeholder="Height"
          type='number'
        />
        <span className="toolbar-controls-image-mandatory-sign">*</span>
        &nbsp;&#8596;&nbsp;
        <input
          onChange={updateValue}
          onBlur={updateValue}
          value={width}
          name="width"
          className="toolbar-controls-image-modal-size-input"
          placeholder="Width"
          type='number'
        />
        <span className="toolbar-controls-image-mandatory-sign">*</span>
      </div>
    </Fragment>
  );
};
