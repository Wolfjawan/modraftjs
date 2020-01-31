import React from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from "draft-js";
import LinkDecorator from './Entities/Link'
// import { stateToHTML } from "draft-js-export-html";
// import { stateFromHTML } from "draft-js-import-html";
import MediaBlockRenderFunc from "./Entities";

import ExampleState from "./example.json";
import Toolbar from "./Toolbar";
import createStyles from "draft-js-custom-styles";
import "./index.css";

const { styles, customStyleFn } = createStyles(["color", "background"]);
export default class TextEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty(LinkDecorator),
    html: "",
    isFocused: false
  };
  onChange = editorState => {
    this.setState({ editorState, html: this.refs.editor.editor.innerHTML });
  };

  focus = () => {
    this.refs.editor.focus();
    this.setState({ html: this.refs.editor.editor.innerHTML, isFocused: true });
    this.isFocusedHandler(true);
  };

  isFocusedHandler = isFocused => {
    this.setState({ isFocused });
  };

  handleKeyCommand = command => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  toggleColor = (target, color) => {
    const { editorState } = this.state;
    if (target === "color") {
      this.onChange(styles.color.toggle(editorState, color));
    }
    if (target === "background") {
      this.onChange(styles.background.toggle(editorState, color));
    }
  };

  componentDidMount() {
    const contentState = convertFromRaw(ExampleState);
    this.setState({
      editorState: EditorState.createWithContent(contentState)
    });
  }

  renderContentAsRawJs() {
    const contentState = this.state.editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    return JSON.stringify(raw, null, 2);
  }

  getEditorState = () => this.state.editorState;
  render() {
    const { editorState, isFocused, html } = this.state;
    const blockRendererFn = MediaBlockRenderFunc({
      getEditorState: this.getEditorState,
      onChange: this.onChange
    });
    return (
      <div className="editor-warper" style={{ minHeight: "1000px" }}>
        <Toolbar
          editorState={editorState}
          toggleColor={this.toggleColor}
          onChange={this.onChange}
          isFocused={isFocused}
          isFocusedHandler={this.isFocusedHandler}
        />
        <div className="editor-container" onClick={this.focus}>
          <Editor
            editorState={editorState}
            customStyleFn={customStyleFn}
            blockRendererFn={blockRendererFn}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            ref="editor"
            spellCheck={true}
          />
        </div>
        {/* <pre>{this.renderContentAsRawJs()}</pre> */}
        <div
          dangerouslySetInnerHTML={{
            __html: html
          }}
        /> 
      </div>
    );
  }
}

