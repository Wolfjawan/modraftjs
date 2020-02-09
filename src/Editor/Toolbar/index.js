import React, { Component } from "react";
import BlockStyleControls from "./BlockStyleControls";
import InlineStyleControls from "./InlineStyleControls";
import BlockStyleColors from "./BlockStyleColors";
import Link from "./Link";
import Image from "./Image";
import Video from "./Video";
import Alignment from "./Alignment";
import FontSize from "./FontSize";
import FontFamily from "./FontFamily";
import UnLink from "./UnLink";

class Toolbar extends Component {
  render() {
    const { editorState, toggleCustomStyle } = this.props;
    return (
      <div className="toolbar-container">
        <BlockStyleControls {...this.props} />
        <Alignment {...this.props} />
        <FontSize
          {...this.props}
          editorState={editorState}
          onToggle={toggleCustomStyle}
        />
        <FontFamily
          {...this.props}
          editorState={editorState}
          onToggle={toggleCustomStyle}
        />
        <BlockStyleColors
          editorState={editorState}
          onToggle={toggleCustomStyle}
        />
        <InlineStyleControls {...this.props} />
        <Link {...this.props} />
        <UnLink {...this.props} />
        <Image {...this.props} />
        <Video {...this.props} />
      </div>
    );
  }
}

export default Toolbar;
