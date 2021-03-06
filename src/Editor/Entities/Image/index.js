import React, { Component, Fragment } from "react";
import { EditorState } from "draft-js";
import Resize from "../../mediaResize";
import "./index.css";

const ImageComponent = config =>
  class Image extends Component {
    _isMounted = false;
    state = {
      src: "",
      alignment: "",
      height: 0,
      width: 0,
      alt: "",
      imageOptions: false,
      marginTop: 0,
      marginLeft: 0
    };

    onImageOptions = imageOptions => {
      this.setState({ imageOptions });
      this.updateState();
      this.setEntityImageOptions({ imageOptions });
    };
    setEntityImageOptions = options => {
      const { block, contentState } = this.props;
      const entityKey = block.getEntityAt(0);
      contentState.mergeEntityData(entityKey, {
        ...options
      });
      config.onChangeEditorState(
        EditorState.push(
          config.getEditorState(),
          contentState,
          "change-block-data"
        )
      );
      this._isMounted && this.updateState();
    };

    updateState = () => {
      const { block, contentState } = this.props;
      const entity = contentState.getEntity(block.getEntityAt(0));
      const {
        src,
        alignment,
        height,
        width,
        alt,
        imageOptions,
        marginTop,
        marginLeft
      } = entity.getData();
      this.setState({
        src,
        alignment,
        height,
        width,
        alt,
        imageOptions,
        marginTop,
        marginLeft
      });
    };
    componentDidMount() {
      this._isMounted = true;
      this.updateState();
    }

    componentWillUnmount() {
      this._isMounted = false;
    }
    render() {
      const {
        src,
        alignment,
        height,
        width,
        alt,
        imageOptions,
        marginTop,
        marginLeft
      } = this.state;
      return (
        <Fragment>
          <span className="image-options" style={{ justifyContent: alignment }}>
            <span className="image-wrapper">
              <span
                onMouseDown={() => {
                  !imageOptions && this.onImageOptions(true);
                }}
                onDoubleClick={() => {
                  this.onImageOptions(false);
                }}
                style={{
                  cursor: "pointer"
                }}
              >
                {imageOptions ? (
                  <Fragment>
                    <Resize
                      src={src}
                      alt={alt}
                      height={height}
                      width={width}
                      alignment={alignment}
                      onSetOptions={this.setEntityImageOptions}
                      mediaComponent={e => {
                        return (
                          <img
                            height={e.height}
                            width={e.width}
                            src={e.src}
                            alt={alt}
                          />
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
                          this.onImageOptions(false);
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
                  <span
                    style={{
                      marginTop: `${marginTop}px`,
                      marginLeft: `${marginLeft}px`,
                      position: "inherit"
                    }}
                  >
                    <span
                      className="resize-crop-box"
                      style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        transform: "translateX(0) translateY(0)"
                      }}
                    >
                      <img
                        src={src}
                        alt="resize"
                        style={{
                          width: `${width}px`,
                          height: `${height}px`
                        }}
                      />
                    </span>
                  </span>
                )}
              </span>
            </span>
          </span>
        </Fragment>
      );
    }
  };

export default ImageComponent;
