import React, { Component } from "react";

export default class CodeInput extends Component {
  state = { expanded: false };
  render() {
    const { videoCode, updateValue } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        <span className="toolbar-controls-video-code-example">
          <p>
            Example: <span>hLQl3WQQoQ0</span>
          </p>
          <span onMouseDown={() => this.setState({ expanded: !expanded })}>
            learn more
          </span>
          {expanded ? (
            <div className="toolbar-controls-video-code-example-steps">
              <h5>
                1. Copy <span>hLQl3WQQoQ0</span> from a YouTube link or YouTube
                sharing link.
              </h5>
              <h5>
                YouTube link:{" "}
                <a
                  href="https://www.youtube.com/watch?v=hLQl3WQQoQ0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.youtube.com/watch?v=<span>hLQl3WQQoQ0</span>
                </a>
              </h5>
              <h5>
                YouTube sharing link:{" "}
                <a
                  href="https://youtu.be/hLQl3WQQoQ0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://youtu.be/<span>hLQl3WQQoQ0</span>
                </a>
              </h5>
              <h5>2. Paste it to the input below.</h5>
              <h5>
                3. Now you should be able to see a preview of the video and play
                it.
              </h5>
            </div>
          ) : null}
        </span>
        <div className="toolbar-controls-video-modal-code">
          <input
            className="toolbar-controls-video-modal-url-input"
            placeholder="Video Code"
            name="videoCode"
            onChange={e => {
              updateValue(e);
              this.setState({ expanded: false });
            }}
            onBlur={updateValue}
            value={videoCode}
          />
          <span className="toolbar-controls-video-mandatory-sign">*</span>
        </div>
        {!expanded && videoCode && (
          <iframe
            title={videoCode}
            className="toolbar-controls-video-modal-upload-option-video-preview"
            src={`https://www.youtube.com/embed/${videoCode}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )}
      </div>
    );
  }
}
