import React, { Component, Fragment } from "react";
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
      <Fragment>
        <BlockStyleHeaders
          {...this.props}
          {...this.state}
          onHeadersExpanded={this.onHeadersExpanded}
        />
        <BlockStyles {...this.props} />
      </Fragment>
    );
  }
}
export default BlockStyleControls;
