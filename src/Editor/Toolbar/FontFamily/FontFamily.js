import React from "react";
import { FONT_FAMILY } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";

const FontFamily = props => {
  const { editorState, fontFamilyExpanded, onFontFamilyExpanded } = props;

  const onToggle = (e, style, target) => {
    e.preventDefault();
    props.onToggle(target, style);
  };
  const currentFontFamily = props.styles.fontFamily.current(editorState);
  const _btnLabel = () => {
    let btnLabel = "Font";
    FONT_FAMILY.forEach(type => {
      if (currentFontFamily && currentFontFamily === type.style) {
        btnLabel = type.label;
      }
    });
    return btnLabel;
  };
  return (
    <span className="">
      <div className="toolbar-controls-box-font-type">
        <span
          onClick={() => onFontFamilyExpanded(!fontFamilyExpanded)}
          className="toolbar-item"
          style={!currentFontFamily ? {} : { color: "#000" }}
        >
          {_btnLabel()}-
          <FontAwesomeIcon icon={faArrowsAltV} style={{ fontSize: "14px" }} />
          <p>Font Family</p>
        </span>
        {fontFamilyExpanded && (
          <div className="toolbar-controls-box-font-type-content">
            {FONT_FAMILY.map(type => (
              <span
                key={type.label}
                onMouseDown={e => onToggle(e, type.style, "fontFamily")}
                style={{
                  fontFamily: type.style,
                  marginTop: "5px"
                }}
                className={
                  type.style === currentFontFamily
                    ? "toolbar-item-option-active"
                    : ""
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
export default FontFamily;
