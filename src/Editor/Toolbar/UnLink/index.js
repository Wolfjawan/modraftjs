import React, { Component } from "react";
import { RichUtils } from "draft-js";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlink } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class UnLink extends Component {
  removeLink = () => {
    const { onChangeEditorState, editorState } = this.props;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const newEditorState = RichUtils.toggleLink(editorState, selection, null);
      onChangeEditorState(newEditorState);
    }
  };
  render() {
    return (
      <Button
        onToggle={this.removeLink}
        icon={<FontAwesomeIcon icon={faUnlink} />}
        label='UnLink'
        hover={true}
      />
    );
  }
}
export default UnLink;
