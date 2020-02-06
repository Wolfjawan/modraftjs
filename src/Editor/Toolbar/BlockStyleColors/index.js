import React, { Component } from "react";
import { INLINE_COLORS } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
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
      <span className="toolbar-item">
        <div className="toolbar-controls-box-colors">
          <span onMouseDown={() => this.colorsExpandedHandler(!colorsExpanded)}>
            <FontAwesomeIcon icon={faSun} />
          </span>
          {colorsExpanded && (
            <div className="toolbar-controls-box-colors-content">
              <div style={{ display: "flex" }}>
                <div style={{ width: "fit-content" }}>Text Color:</div>
                <input
                  style={{ width: "80px", height: "16px", marginLeft: "4px" }}
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
              <div style={{ display: "flex" }}>
                <div style={{ width: "fit-content" }}>Background Color:</div>
                <input
                  style={{ width: "80px", height: "16px", marginLeft: "4px" }}
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
      </span>
    );
  }
}

export default InlineStyleControls;
