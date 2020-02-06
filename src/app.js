import React, { Component } from "react";

import {
  _convertContentStateToRawJS,
  EditorState,
  Editor,
  LinkDecorator,
  _convertFromRow
} from "./Editor";
import ExampleState from "./example.json";

class App extends Component {
  state = {
    editorState: EditorState.createEmpty(LinkDecorator),
    contentState: {},
    html: ""
  };
  
  onChange = e => {
    this.setState({ ...e });
  };

  componentDidMount() {
    const { editorState } = this.state;
    this.setState({
      editorState: _convertFromRow(editorState, ExampleState.contentState)
    });
  }

  render() {
    const { contentState, html, editorState } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px"
        }}
      >
        <div style={{ width: "90%" }}>
          <Editor
            onChange={this.onChange}
            editorState={editorState}
            onChangeHTML={this.onChangeHTML}
          />
          <h1> HTML state</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: html
            }}
          />
          <h1>Content State</h1>
          <pre>{_convertContentStateToRawJS(contentState)}</pre>
        </div>
      </div>
    );
  }
}

export default App;
