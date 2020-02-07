import React, { Component } from "react";
import FontFamilyComponent from "./FontFamily";
import "./index.css";
class FontFamily extends Component {
  state = { fontFamilyExpanded: false };
  onFontFamilyExpanded = fontFamilyExpanded => {
    this.setState({ fontFamilyExpanded });
  };
  render() {
    return (
      <FontFamilyComponent
        {...this.props}
        {...this.state}
        onFontFamilyExpanded={this.onFontFamilyExpanded}
      />
    );
  }
}
export default FontFamily;
