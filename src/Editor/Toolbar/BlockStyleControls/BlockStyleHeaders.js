import React from "react";
// import StyleButton from "../Button";
import { RichUtils } from "draft-js";
import { BLOCK_TYPES_HEADERS } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";

const BlockStyleHeaders = props => {
  const {
    editorState,
    onChangeEditorState,
    headersExpanded,
    onHeadersExpanded
  } = props;
  const onToggle = blockType => {
    onChangeEditorState(RichUtils.toggleBlockType(editorState, blockType));
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
    <span className="toolbar-item">
      <div className="toolbar-controls-box-headers">
        <span
          onClick={() => onHeadersExpanded(!headersExpanded)}
          className="toolbar-controls-box-headers-btn"
          style={blockType && blockType === "unstyled" ? {} : { color: "#000" }}
        >
          {_btnLabel()} <FontAwesomeIcon icon={faArrowsAltV} />
          <p>Heading Options</p>
        </span>
        {headersExpanded && (
          <div className="toolbar-controls-box-headers-content">
            {BLOCK_TYPES_HEADERS.map(type => (
              <span
                key={type.label}
                type={type.style}
                onMouseDown={() => onToggle(type.style)}
                style={{
                  borderBottom: "1px solid #3433333b",
                  marginTop: "5px",
                  display: "flex"
                }}
                className={
                  type.style === blockType ? "toolbar-item-option-active" : ""
                }
              >
                {type.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </span>
  );
};
export default BlockStyleHeaders;
