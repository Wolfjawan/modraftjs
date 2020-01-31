import React from "react";
import StyleButton from "../Button";
import { RichUtils } from "draft-js";
import { INLINE_STYLES } from "./constants";

const InlineStyleControls = props => {
  let currentStyle = props.editorState.getCurrentInlineStyle();
  const onToggle = inlineStyle => {
    props.onChange(RichUtils.toggleInlineStyle(props.editorState, inlineStyle));
  };
  return (
    <div className="toolbar-controls-box">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          onToggle={onToggle}
          {...type}
        />
      ))}
    </div>
  );
};

export default InlineStyleControls;
