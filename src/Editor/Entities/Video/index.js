import React, { Component, Fragment } from "react";
import { EditorState } from "draft-js";
import Resize from "../../mediaResize";
import "./index.css";

const VideoComponent = config =>
  class Video extends Component {
    state = {
      videoOptions: false,
      hovered: false
    };

    onVideoOptions = videoOptions => {
      this.setEntityVideoOptions({ videoOptions });
    };
    setEntityVideoOptions = options => {
      const { block, contentState } = this.props;
      const entityKey = block.getEntityAt(0);
      contentState.mergeEntityData(entityKey, {
        ...options
      });
      config.onChange(
        EditorState.push(
          config.getEditorState(),
          contentState,
          "change-block-data"
        )
      );
      this.setState({
        dummy: true
      });
    };

    render() {
      const { hovered } = this.state;
      const { block, contentState } = this.props;
      const entity = contentState.getEntity(block.getEntityAt(0));
      const {
        videoCode,
        alignment,
        height,
        width,
        title,
        videoOptions,
        marginTop,
        marginLeft
      } = entity.getData();
      return (
        <Fragment>
          <span className="video-options" style={{ justifyContent: alignment }}>
            <span
              className="video-wrapper"
              onMouseEnter={() => {
                this.setState({
                  hovered: true
                });
              }}
              onMouseLeave={() => {
                this.setState({
                  hovered: false
                });
              }}
            >
              <span>
                {videoOptions ? (
                  <Fragment>
                    <Resize
                      src={videoCode}
                      height={height}
                      width={width}
                      alignment={alignment}
                      onSetOptions={this.setEntityVideoOptions}
                      mediaComponent={e => {
                        return (
                          <iframe
                            title={title}
                            height={e.height}
                            width={e.width}
                            src={`https://www.youtube.com/embed/${e.src}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                            allowFullScreen
                          ></iframe>
                        );
                      }}
                    />
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "flex-end"
                      }}
                    >
                      <button
                        onMouseDown={() => {
                          this.onVideoOptions(false);
                        }}
                        style={{
                          color: "#fff",
                          margin: "10px",
                          backgroundColor: "#0579ec",
                          border: "none",
                          borderRadius: "5px",
                          height: "40px",
                          cursor: "pointer"
                        }}
                      >
                        Save Changes
                      </button>
                    </span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span
                      style={{
                        marginTop: `${marginTop}px`,
                        marginLeft: `${marginLeft}px`,
                        position: "inherit"
                      }}
                    >
                      <span
                        style={{
                          width: `${width}px`,
                          height: `${height}px`,
                          transform: "translateX(0) translateY(0)"
                        }}
                      >
                        <iframe
                          title={title}
                          height={height}
                          width={width}
                          src={`https://www.youtube.com/embed/${videoCode}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                          allowFullScreen
                        ></iframe>
                      </span>
                    </span>
                    {hovered && (
                      <div className="video-alignment-popup">
                        <button
                          onMouseDown={() => {
                            !videoOptions && this.onVideoOptions(true);
                          }}
                          style={{
                            color: "#fff",
                            backgroundColor: "#0579ec",
                            border: "none",
                            borderRadius: "5px",
                            height: "40px",
                            width: "60px",
                            cursor: "pointer"
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </Fragment>
                )}
              </span>
            </span>
          </span>
        </Fragment>
      );
    }
  };
export default VideoComponent;
