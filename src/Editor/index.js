import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import LinkDecorator from "./Entities/Link";
import MediaBlockRenderFunc from "./Entities";
import Toolbar from "./Toolbar";
import createStyles from "draft-js-custom-styles";
import "./index.css";
import {
  _convertFromHTML,
  _convertToRaw,
  _convertEditorStateToRawJS,
  _convertFromRow,
  _convertContentStateToRawJS
} from "./useCases/DataConvert";
import ExampleState from "./example.json";

const { styles, customStyleFn } = createStyles(["color", "background"]);
export default class TextEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty(LinkDecorator),
    contentState: {},
    html: "",
    isFocused: false
  };
  onChangeEditorState = editorState => {
    const contentState = _convertToRaw(editorState);
    this.setState({
      editorState,
      contentState,
      html: this.refs.editor.editor.innerHTML
    });
  };

  focus = () => {
    this.refs.editor.focus();
    this.setState({ isFocused: true });
    this.isFocusedHandler(true);
  };

  isFocusedHandler = isFocused => {
    this.setState({ isFocused });
  };

  handleKeyCommand = command => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChangeEditorState(newState);
      return true;
    }
    return false;
  };

  toggleColor = (target, color) => {
    const { editorState } = this.state;
    if (target === "color") {
      this.onChangeEditorState(styles.color.toggle(editorState, color));
    }
    if (target === "background") {
      this.onChangeEditorState(styles.background.toggle(editorState, color));
    }
  };

  componentDidMount() {
    this.setState({
      editorState: _convertFromRow(
        this.state.editorState,
        ExampleState.contentState
      )
    });
  }

  getEditorState = () => this.state.editorState;
  render() {
    const { editorState, isFocused, html } = this.state;
    const blockRendererFn = MediaBlockRenderFunc({
      getEditorState: this.getEditorState,
      onChangeEditorState: this.onChangeEditorState
    });
    return (
      <div className="editor-warper" style={{ minHeight: "1000px" }}>
        <Toolbar
          editorState={editorState}
          toggleColor={this.toggleColor}
          onChangeEditorState={this.onChangeEditorState}
          isFocused={isFocused}
          isFocusedHandler={this.isFocusedHandler}
        />
        <div className="editor-container" onClick={this.focus}>
          <Editor
            editorState={editorState}
            customStyleFn={customStyleFn}
            blockRendererFn={blockRendererFn}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChangeEditorState}
            ref="editor"
            spellCheck={true}
          />
        </div>
        <h1> HTML state</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: html
          }}
        />
        <h1>Content State</h1>
        <pre>{_convertContentStateToRawJS(editorState)}</pre>
        <h1>Editor State</h1>
        <pre>{_convertEditorStateToRawJS(editorState)}</pre>
      </div>
    );
  }
}
