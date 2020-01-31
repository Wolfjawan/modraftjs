import React, { Fragment } from "react";
import StyleButton from "../Button";
import { RichUtils } from "draft-js";
import { BLOCK_TYPES } from "./constants";

const BlockStyles = props => {
  const { editorState, onChange } = props;
  const onToggle = blockType => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
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
        />
      ))}
    </Fragment>
  );
};
export default BlockStyles;
