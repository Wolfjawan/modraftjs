import React, { Component } from "react";
import BlockStyleHeaders from "./BlockStyleHeaders";
import BlockStyles from "./BlockStyles";
import './index.css'
class BlockStyleControls extends Component {
  state = { headersExpanded: false };
  onHeadersExpanded = headersExpanded => {
    this.setState({ headersExpanded });
  };
  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.isFocused) {
      this.onHeadersExpanded(false);
    }
  }
  render() {
    return (
      <div className="toolbar-controls-box">
        <BlockStyleHeaders
          {...this.props}
          {...this.state}
          onHeadersExpanded={this.onHeadersExpanded}
        />
        <BlockStyles {...this.props} />
      </div>
    );
  }
}
export default BlockStyleControls;
