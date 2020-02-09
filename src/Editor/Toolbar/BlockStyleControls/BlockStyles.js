import React, { Fragment } from "react";
import StyleButton from "../Button";
import { RichUtils } from "draft-js";
import { BLOCK_TYPES } from "./constants";

const BlockStyles = props => {
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
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          onToggle={onToggle}
          {...type}
          hover={true}
        />
      ))}
    </Fragment>
  );
};
export default BlockStyles;
