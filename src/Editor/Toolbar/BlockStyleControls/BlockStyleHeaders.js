import React, { Fragment } from "react";
import StyleButton from "../Button";
import { RichUtils } from "draft-js";
import { BLOCK_TYPES_HEADERS } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";

const BlockStyleHeaders = props => {
  const { editorState, onChange, headersExpanded, onHeadersExpanded } = props;
  const onToggle = blockType => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const _btnLabel = () => {
    let btnLabel = "Normal";
    BLOCK_TYPES_HEADERS.forEach(type => {
      if (blockType && blockType === type.style) {
        btnLabel = type.label;
      }
    });
    return btnLabel;
  };
  return (
    <Fragment>
      <div className="toolbar-controls-box-headers">
        <span
          onClick={() => onHeadersExpanded(!headersExpanded)}
          className="toolbar-controls-box-headers-btn"
          style={blockType && blockType === "unstyled" ? {} : { color: "#000" }}
        >
          {_btnLabel()} <FontAwesomeIcon icon={faArrowsAltV} />
        </span>
        {headersExpanded && (
          <div className="toolbar-controls-box-headers-content">
            {BLOCK_TYPES_HEADERS.map(type => (
              <StyleButton
                key={type.label}
                active={type.style === blockType}
                onToggle={onToggle}
                {...type}
              />
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default BlockStyleHeaders;
