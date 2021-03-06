import React, { Component } from "react";
import { AtomicBlockUtils } from "draft-js";
import ImageLayouts from "./Component";

class ImageControl extends Component {
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

  addImage = (src, height, width, alt) => {
    const { editorState, onChangeEditorState } = this.props;
    const entityKey = editorState
      .getCurrentContent()
      .createEntity("image", "IMMUTABLE", {
        src,
        height,
        width,
        alt
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
    const { uploadImage } = this.props;
    const { expanded } = this.state;
    return (
      <ImageLayouts
        onChange={this.addImage}
        expanded={expanded}
        onExpandEvent={this.onExpandEvent}
        doExpand={this.doExpand}
        doCollapse={this.doCollapse}
        uploadImage={uploadImage}
      />
    );
  }
}

export default ImageControl;
