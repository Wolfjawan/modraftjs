import React, { Component } from "react";
import "./index.css";
export default class StyleButton extends Component {
  onToggle = e => {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  };

  render() {
    let className = "toolbar-item";
    const { active, label, icon, hover } = this.props;
    if (active) {
      className += " toolbar-item-active";
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {icon || label}
        {hover ? <p>{label}</p> : null}
      </span>
    );
  }
}
