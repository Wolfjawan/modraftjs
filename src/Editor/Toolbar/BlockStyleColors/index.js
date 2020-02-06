import React, { Component } from "react";
import { INLINE_COLORS } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import StyleButton from "../Button";
import "./index.css";
class InlineStyleControls extends Component {
  state = { color: "", background: "", colorsExpanded: false };
  onToggle = (e, style, target) => {
    e.preventDefault();
    this.setState({ [target]: style });
    this.props.onToggle(target, style);
  };
  colorsExpandedHandler = colorsExpanded => {
    this.setState({ colorsExpanded });
  };
  render() {
    const { color, background, colorsExpanded } = this.state;
    return (
      <div className="toolbar-controls-box-colors">
        <StyleButton
          onToggle={() => this.colorsExpandedHandler(!colorsExpanded)}
          active={colorsExpanded}
          icon={<FontAwesomeIcon icon={faPen} />}
        />
        {colorsExpanded && (
          <div className="toolbar-controls-box-colors-content">
            <div style={{ display: "flex", height: "16px", fontSize: "14px" }}>
              <span style={{ width: "fit-content", fontSize: "14px" }}>
                Text Color:
              </span>
              <input
                style={{ width: "80px", marginLeft: "4px" }}
                type="text"
                value={color}
                name="color"
                placeholder="Color code"
                onChange={e => {
                  this.setState({ color: e.target.value });
                }}
              />
              {color && (
                <span
                  style={{
                    width: "fit-content",
                    height: "20px",
                    backgroundColor: color,
                    cursor: "pointer"
                  }}
                  onMouseDown={e => {
                    this.onToggle(e, color, "color");
                  }}
                >
                  Go
                </span>
              )}
            </div>
            {INLINE_COLORS.map(type => (
              <span
                key={type.label}
                className="toolbar-controls-box-colors-item"
                style={{ backgroundColor: type.backgroundColor }}
                onMouseDown={e => {
                  this.onToggle(e, type.style, "color");
                }}
              />
            ))}
            <div style={{ display: "flex", height: "16px", fontSize: "14px" }}>
              <span style={{ width: "fit-content", fontSize: "14px" }}>
                Background Color:
              </span>
              <input
                style={{ width: "80px", marginLeft: "4px" }}
                type="text"
                value={background}
                name="background"
                placeholder="Color code"
                onChange={e => {
                  this.setState({ background: e.target.value });
                }}
              />
              {background && (
                <span
                  style={{
                    width: "fit-content",
                    height: "20px",
                    backgroundColor: background,
                    cursor: "pointer"
                  }}
                  onMouseDown={e => {
                    this.onToggle(e, background, "background");
                  }}
                >
                  Go
                </span>
              )}
            </div>
            {INLINE_COLORS.map(type => (
              <span
                key={type.label}
                className="toolbar-controls-box-colors-item"
                style={{ backgroundColor: type.backgroundColor }}
                onMouseDown={e => this.onToggle(e, type.style, "background")}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default InlineStyleControls;
