import React, { Component, Fragment } from "react";
import { AtomicBlockUtils } from "draft-js";
import VideoLayouts from "./Component";

class VideoControl extends Component {
  state = {
    expanded: false
  };
  onExpandEvent = () => {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded
    });
    this.props.isFocusedHandler(false);
  };

  doExpand = () => {
    this.setState({
      expanded: true
    });
  };

  doCollapse = () => {
    this.setState({
      expanded: false
    });
  };

  expandCollapse = () => {
    this.setState({
      expanded: false
    });
  };

  addVideo = (videoCode, height, width, title) => {
    const { editorState, onChangeEditorState } = this.props;
    const entityKey = editorState
      .getCurrentContent()
      .createEntity("video", "IMMUTABLE", {
        videoCode,
        height,
        width,
        title
      })
      .getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      " "
    );
    onChangeEditorState(newEditorState);
    this.doCollapse();
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.isFocused) {
      this.doCollapse();
    }
  }
  render() {
    const { expanded } = this.state;
    return (
      <Fragment>
        <VideoLayouts
          onChange={this.addVideo}
          expanded={expanded}
          onExpandEvent={this.onExpandEvent}
          doExpand={this.doExpand}
          doCollapse={this.doCollapse}
        />
      </Fragment>
    );
  }
}

export default VideoControl;
