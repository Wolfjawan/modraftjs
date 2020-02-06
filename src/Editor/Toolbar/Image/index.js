import React, { Component, Fragment } from "react";
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
        alt,
        alignment: "center"
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
        <ImageLayouts
          onChange={this.addImage}
          expanded={expanded}
          onExpandEvent={this.onExpandEvent}
          doExpand={this.doExpand}
          doCollapse={this.doCollapse}
        />
      </Fragment>
    );
  }
}

export default ImageControl;
