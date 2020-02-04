import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import LinkDecorator from "./Entities/Link";
import MediaBlockRenderFunc from "./Entities";
import Toolbar from "./Toolbar";
import createStyles from "draft-js-custom-styles";
import "./index.css";
import { _convertToRaw, _convertFromRow } from "./useCases/DataConvert";

const { styles, customStyleFn } = createStyles(["color", "background"]);
export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(LinkDecorator),
      isFocused: false
    };
  }
  componentWillMount() {
    if (this.props.contentState && this.props.contentState.blocks) {
      const editorState = _convertFromRow(
        this.state.editorState,
        this.props.contentState
      );
      this.setState({ editorState }, () => {
        if (this.props.onChange) {
          this.props.onChange({
            contentState: _convertToRaw(this.state.editorState)
          });
        }
      });
    }
  }
  onChangeEditorState = editorState => {
    const { onChange, onChangeHTML } = this.props;
    const contentState = _convertToRaw(editorState);

    const html =
      this.refs && this.refs.editor && this.refs.editor.editor.innerHTML;
    this.setState({ editorState });
    onChange && onChange(contentState);
    onChange && onChangeHTML(html);
  };

  focus = () => {
    this.refs.editor && this.refs.editor.focus();
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

  getEditorState = () => this.state.editorState;
  render() {
    const { isFocused, editorState } = this.state;
    const blockRendererFn = MediaBlockRenderFunc({
      getEditorState: this.getEditorState,
      onChangeEditorState: this.onChangeEditorState
    });
    return (
      <div className="editor-warper">
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
      </div>
    );
  }
}
