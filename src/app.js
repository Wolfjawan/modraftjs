import React, { Component } from "react";
import {
  _convertContentStateToRawJS,
  EditorState,
  Editor,
  LinkDecorator,
  _convertFromRow
} from "./Editor";
import ExampleState from "./example.json";
import "./index.css";
class MoDraftJS extends Component {
  state = {
    editorState: EditorState.createEmpty(LinkDecorator),
    contentState: {},
    html: "",
    expanded: false
  };

  onChange = e => {
    this.setState({ ...e });
  };
  uploadImage = file => {
    console.log(file);
  };
  render() {
    const { contentState, html, editorState, expanded } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px"
        }}
      >
        <div style={{ width: "90%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Rich Text Editor</h2>
            <div>
              <span className="projects-modraftjs-dropdown">
                <span
                  onClick={() => this.setState({ expanded: !expanded })}
                  className="projects-modraftjs-dropdown-btn"
                >
                  Examples
                </span>
                {expanded && (
                  <div className="projects-modraftjs-dropdown-list">
                    {ExampleState.contentState.map(content => {
                      return (
                        <span
                          key={content.label}
                          style={{ cursor: "pointer" }}
                          onMouseDown={() =>
                            this.setState({
                              editorState: _convertFromRow(
                                editorState,
                                content.content
                              )
                            })
                          }
                        >
                          {content.label}
                        </span>
                      );
                    })}
                  </div>
                )}
              </span>
            </div>
          </div>
          <div>
            <Editor
              onChange={this.onChange}
              editorState={editorState}
              onChangeHTML={this.onChangeHTML}
              uploadImage={this.uploadImage}
            />
          </div>
          {html && (
            <div>
              <h1> HTML state</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: html
                }}
              />
            </div>
          )}
          {_convertContentStateToRawJS(contentState) && (
            <div>
              <h1>Content State</h1>
              <pre>{_convertContentStateToRawJS(contentState)}</pre>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default MoDraftJS;
