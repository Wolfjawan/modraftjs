import React, { Fragment } from "react";
import StyleButton from "../Button";
import { RichUtils } from "draft-js";
import { INLINE_STYLES } from "./constants";

const InlineStyleControls = props => {
  let currentStyle = props.editorState.getCurrentInlineStyle();
  const onToggle = inlineStyle => {
    props.onChangeEditorState(RichUtils.toggleInlineStyle(props.editorState, inlineStyle));
  };
  return (
    <Fragment>
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          onToggle={onToggle}
          {...type}
        />
      ))}
    </Fragment>
  );
};

export default InlineStyleControls;
