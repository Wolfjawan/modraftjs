import React from "react";
import { FONT_SIZES } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";

const FontSize = props => {
  const { editorState, fontSizeExpanded, onFontSizeExpanded } = props;

  const onToggle = (e, style, target) => {
    e.preventDefault();
    props.onToggle(target, style);
  };
  const currentFontSize = props.styles.fontSize.current(editorState);
  const _btnLabel = () => {
    let btnLabel = "16";
    FONT_SIZES.forEach(type => {
      if (currentFontSize && currentFontSize === type.style) {
        btnLabel = type.label;
      }
    });
    return btnLabel;
  };
  return (
    <span className="toolbar-item">
      <div className="toolbar-controls-box-font-size">
        <span
          onClick={() => onFontSizeExpanded(!fontSizeExpanded)}
          className="toolbar-controls-box-font-size-btn"
          style={!currentFontSize ? {} : { color: "#000" }}
        >
          {_btnLabel()} <FontAwesomeIcon icon={faArrowsAltV} />
          <p>Font Size</p>
        </span>
        {fontSizeExpanded && (
          <div className="toolbar-controls-box-font-size-content">
            {FONT_SIZES.map(type => (
              <span
                key={type.label}
                onMouseDown={e => onToggle(e, type.style, "fontSize")}
                className={
                  type.style === currentFontSize ? "toolbar-item-active" : ""
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
export default FontSize;
