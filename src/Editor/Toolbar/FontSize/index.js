import React, { Component } from "react";
import FontSizeComponent from "./FontSize";
import "./index.css";
class FontSize extends Component {
  state = { fontSizeExpanded: false };
  onFontSizeExpanded = fontSizeExpanded => {
    this.setState({ fontSizeExpanded });
  };
  render() {
    return (
      <FontSizeComponent
        {...this.props}
        {...this.state}
        onFontSizeExpanded={this.onFontSizeExpanded}
      />
    );
  }
}
export default FontSize;
