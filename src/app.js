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
  componentWillMount() {
    this.setState({ contentState: ExampleState.contentState });
  }

  render() {
    const { contentState, html } = this.state;
    console.log(contentState);
    return (
      <div>
        <Editor
          onChange={this.onChange}
          contentState={contentState}
          onChangeHTML={html => this.setState({ html })}
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
    );
  }
}

export default App;
