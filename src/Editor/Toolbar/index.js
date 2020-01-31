import React, { Component } from "react";
import BlockStyleControls from "./BlockStyleControls";
import InlineStyleControls from "./InlineStyleControls";
import BlockStyleColors from "./BlockStyleColors";
import Link from "./Link";
import Image from "./Image";
import Video from "./Video";

class Toolbar extends Component {
  render() {
    const { editorState, toggleColor } = this.props;
    return (
      <div className="toolbar-container">
        <BlockStyleControls {...this.props} />
        <InlineStyleControls {...this.props} />
        <Link {...this.props} />
        <BlockStyleColors editorState={editorState} onToggle={toggleColor} />
        <Image {...this.props} />
        <Video {...this.props} />
      </div>
    );
  }
}

export default Toolbar;
