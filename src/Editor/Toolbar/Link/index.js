import React, { Component } from "react";
import { EditorState, RichUtils } from "draft-js";
import getFragmentFromSelection from "draft-js/lib/getFragmentFromSelection";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
function formatUrl(url) {
  let httpString = "http://";
  let httpsString = "https://";
  if (
    url.substr(0, httpString.length).toLowerCase() !== httpString &&
    url.substr(0, httpsString.length).toLowerCase() !== httpsString
  )
    url = httpString + url;
  return url;
}
class TextEditor extends Component {
  state = { url: "", showLinkInput: false };
  onChange = e => {
    this.setState({ url: e.target.value });
  };
  showLinkInputHandler = showLinkInput => {
    this.setState({ showLinkInput });
  };
  showForm = () => {
    const { editorState } = this.props;
    const { showLinkInput } = this.state;
    if (showLinkInput) this.showLinkInputHandler(!showLinkInput);
    const selected = getFragmentFromSelection(editorState);
    const text = selected ? selected.map(x => x.getText()).join("\n") : "";
    const url = formatUrl(text);
    if (selected) {
      this.setState({
        url
      });
      this.showLinkInputHandler(!showLinkInput);
      this.props.isFocusedHandler(false);
    }
  };
  setLink = () => {
    const { url } = this.state;
    const { editorState, onChangeEditorState } = this.props;
    const currentContent = editorState.getCurrentContent();
    const currentContentWithEntity = currentContent.createEntity(
      "LINK",
      "MUTABLE",
      { url }
    );
    const entityKey = currentContentWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: currentContentWithEntity
    });
    onChangeEditorState(
      RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      )
    );
    this.setState({ url: "" });
    this.showLinkInputHandler(false);
  };
  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.isFocused) {
      this.showLinkInputHandler(false);
    }
  }
  render() {
    const { url, showLinkInput } = this.state;
    return (
      <div className="toolbar-controls-box-link" onClick={this.focus}>
        <Button
          onToggle={this.showForm}
          active={showLinkInput}
          icon={<FontAwesomeIcon icon={faLink} />}
          label="Link"
          hover={true}
        />
        {showLinkInput && (
          <div className="toolbar-controls-box-link-content">
            <div style={{ display: "flex" }}>
              <input
                ref="url_input"
                type="text"
                value={url}
                name="background"
                placeholder="Enter link"
                onChange={e => {
                  this.setState({ url: e.target.value });
                }}
              />
              <button onMouseDown={this.setLink}>Save</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default TextEditor;
