import React, { Fragment } from "react";
import StyleButton from "../Button";
import { RichUtils } from "draft-js";
import { ALIGN_TYPES } from "./constants";

const Alignment = props => {
  const { editorState, onChangeEditorState } = props;
  const onToggle = blockType => {
    onChangeEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <Fragment>
      {ALIGN_TYPES.map(type => (
        <StyleButton
          key={type.style}
          active={type.style === blockType}
          onToggle={onToggle}
          {...type}
        />
      ))}
    </Fragment>
  );
};
export default Alignment;
