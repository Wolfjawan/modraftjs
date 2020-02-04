import React, { Component } from "react";
import Editor from "./Editor";
import { _convertContentStateToRawJS } from "./Editor/useCases/DataConvert";
import ExampleState from "./example.json";

class App extends Component {
  state = {
    contentState: {},
    html: ""
  };

  onChange = contentState => {
    this.setState({ contentState });
  };

  onChangeHTML = html => {
    this.setState({ html });
  };

  componentWillMount() {
    this.setState({ contentState: ExampleState.contentState });
  }

  render() {
    const { contentState, html } = this.state;
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
            contentState={contentState}
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
