import React, { Component } from "react";
import { EditorState, Modifier } from "draft-js";

class index extends Component {
  clear = () => {
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    const currentContent = editorState.getCurrentContent();
    const styles = editorState.getCurrentInlineStyle();

    const removeStyles = styles.reduce((state, style) => {
      return Modifier.removeInlineStyle(state, selection, style);
    }, currentContent);

    const removeBlock = Modifier.setBlockType(
      removeStyles,
      selection,
      "unstyled"
    );

    this.props.onChange(EditorState.push(editorState, removeBlock));
  };
  render() {
    return <div></div>;
  }
}

export default index;
