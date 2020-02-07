import React from "react";
import { Editor as DraftEditor, RichUtils } from "draft-js";
import MediaBlockRenderFunc from "./Entities";
import Toolbar from "./Toolbar";
import createStyles from "draft-js-custom-styles";
import { _convertToRaw } from "./useCases/DataConvert";
import "./index.css";
const { styles, customStyleFn } = createStyles([
  "color",
  "background",
  "fontSize",
  "fontFamily"
]);
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }
  onChangeEditorState = editorState => {
    const { onChange } = this.props;
    const contentState = _convertToRaw(editorState);
    const html =
      this.refs && this.refs.editor && this.refs.editor.editor.innerHTML;
    onChange && onChange({ editorState, contentState, html });
  };

  focus = () => {
    this.refs.editor && this.refs.editor.focus();
    this.isFocusedHandler(true);
  };

  isFocusedHandler = isFocused => {
    this.setState({ isFocused });
  };

  handleKeyCommand = command => {
    const { editorState } = this.props;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChangeEditorState(newState);
      return true;
    }
    return false;
  };

  toggleCustomStyle = (target, style) => {
    const { editorState } = this.props;
    if (target === "color") {
      this.onChangeEditorState(styles.color.toggle(editorState, style));
    }
    if (target === "background") {
      this.onChangeEditorState(styles.background.toggle(editorState, style));
    }
    if (target === "fontSize") {
      this.onChangeEditorState(styles.fontSize.toggle(editorState, style));
    }
    if (target === "fontFamily") {
      this.onChangeEditorState(styles.fontFamily.toggle(editorState, style));
    }
  };

  getEditorState = () => this.props.editorState;
  render() {
    const { isFocused } = this.state;
    const { editorState } = this.props;
    const blockRendererFn = MediaBlockRenderFunc({
      getEditorState: this.getEditorState,
      onChangeEditorState: this.onChangeEditorState
    });
    return (
      <div className="editor-warper">
        <Toolbar
          styles={styles}
          editorState={editorState}
          toggleCustomStyle={this.toggleCustomStyle}
          onChangeEditorState={this.onChangeEditorState}
          isFocused={isFocused}
          isFocusedHandler={this.isFocusedHandler}
          focus={this.focus}
        />
        <div className="editor-container" onClick={this.focus}>
          <DraftEditor
            editorState={editorState}
            customStyleFn={customStyleFn}
            blockStyleFn={blockStyleFn}
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
function blockStyleFn(block) {
  const blockType = block.getType();
  if (blockType === "blockquote") {
    return "editor-blockquote";
  }
  if (blockType === "code-block") {
    return "editor-code-block";
  }
  if (blockType === "align-left") {
    return "align-left";
  }
  if (blockType === "align-center") {
    return "align-center";
  }
  if (blockType === "align-right") {
    return "align-right";
  } else return null;
}
