import React, { Component } from "react";
import "./index.css";
const html = document.getElementsByTagName("html")[0];

class MediaResize extends Component {
  state = {
    height: 0,
    width: 0,
    mouseDownAction: "",
    mediaLeft: "",
    mediaToTop: "",
    marginTop: 0,
    marginLeft: 0,
    src: this.props.src,
    alignment: ""
  };
  onMouseDown = (e, mouseDownAction) => {
    const { x, y } = e.nativeEvent;
    this.setState(
      {
        mouseDownAction,
        mediaLeft: mouseDownAction.includes("e") ? x - this.state.width : x,
        mediaToTop: mouseDownAction.includes("s") ? y - this.state.height : y
      },
      () => {
        if (this.state.mouseDownAction) {
          html.addEventListener("mousemove", e => {
            this.onMouseMove(e);
          });
          html.addEventListener("mouseup", this.onMouseUp);
        }
      }
    );
  };

  setAlignment = alignment => {
    this.props.onSetOptions({ alignment });
  };
  onMouseUp = () => {
    const { width, height } = this.state;
    html.removeEventListener("mousemove", this.onMouseMove);
    html.removeEventListener("mouseup", this.onMouseUp);
    this.props.onSetOptions({ height, width });
    this.setState({ mouseDownAction: "", marginTop: 0, marginLeft: 0 });
  };

  onMouseMove = e => {
    const {
      height,
      width,
      marginTop,
      marginLeft,
      mouseDownAction,
      mediaLeft,
      mediaToTop
    } = this.state;
    const { x, y } = e;
    if (mouseDownAction === "e") {
      const newWidth = x - mediaLeft;
      this.setState({ width: newWidth });
    }
    if (mouseDownAction === "s") {
      const newHeight = y - mediaToTop;
      this.setState({ height: newHeight });
    }
    if (mouseDownAction === "n") {
      const newMarginTop = y - mediaToTop;
      const newHeight = height - (newMarginTop - marginTop);
      this.setState({ height: newHeight, marginTop: newMarginTop });
    }
    if (mouseDownAction === "w") {
      const newMarginLeft = x - mediaLeft;
      const newWidth = width - (newMarginLeft - marginLeft);
      this.setState({ width: newWidth, marginLeft: newMarginLeft });
    }

    if (mouseDownAction === "se") {
      const newWidth = x - mediaLeft;
      const newHeight = y - mediaToTop;
      this.setState({ width: newWidth, height: newHeight });
    }
    if (mouseDownAction === "nw") {
      const newMarginLeft = x - mediaLeft;
      const newWidth = width - (newMarginLeft - marginLeft);
      const newMarginTop = y - mediaToTop;
      const newHeight = height - (newMarginTop - marginTop);
      this.setState({
        height: newHeight,
        marginTop: newMarginTop,
        width: newWidth,
        marginLeft: newMarginLeft
      });
    }
    if (mouseDownAction === "ne") {
      const newWidth = x - mediaLeft;
      const newMarginTop = y - mediaToTop;
      const newHeight = height - (newMarginTop - marginTop);
      this.setState({
        height: newHeight,
        marginTop: newMarginTop,
        width: newWidth
      });
    }
    if (mouseDownAction === "sw") {
      const newHeight = y - mediaToTop;
      const newMarginLeft = x - mediaLeft;
      const newWidth = width - (newMarginLeft - marginLeft);
      this.setState({
        width: newWidth,
        marginLeft: newMarginLeft,
        height: newHeight
      });
    }
    // if (mouseDownAction === "x") {
    //   const newMarginTop = y - mediaToTop;
    //   this.setState({ marginTop: newMarginTop });
    //   const newMarginLeft = x - mediaLeft;
    //   this.setState({ marginLeft: newMarginLeft });
    // }
  };

  UNSAFE_componentWillMount() {
    const { width, height, src, alignment } = this.props;
    this.setState({
      width: parseInt(width),
      height: parseInt(height),
      src,
      alignment
    });
  }
  render() {
    const { height, width, marginTop, marginLeft, src } = this.state;
    const { mediaComponent } = this.props;
    return (
      <div
        style={{
          marginTop: `${marginTop}px`,
          marginLeft: `${marginLeft}px`,
          position: "inherit"
        }}
        onMouseUp={this.onMouseUp}
      >
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: "translateX(0) translateY(0)"
          }}
        >
          {mediaComponent({ height, width, src })}
          <span
            className="resize-face resize-move"
            onMouseDown={e => this.onMouseDown(e, "x")}
          >
            <div className="resize-alignment-popup">
              <div
                onClick={() => this.setAlignment("flex-start")}
                className="resize-alignment-left"
              ></div>
              <div
                onClick={() => this.setAlignment("center")}
                className="resize-alignment-center"
              ></div>
              <div
                onClick={() => this.setAlignment("flex-end")}
                className="resize-alignment-right"
              ></div>
            </div>
          </span>
          <span
            className="resize-line line-e"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "e")}
          ></span>
          <span
            className="resize-line line-n"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "n")}
          ></span>
          <span
            className="resize-line line-w"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "w")}
          ></span>
          <span
            className="resize-line line-s"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "s")}
          ></span>
          <span
            className="resize-point point-e"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "e")}
          ></span>
          <span
            className="resize-point point-n"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "n")}
          ></span>
          <span
            className="resize-point point-w"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "w")}
          ></span>
          <span
            className="resize-point point-s"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "s")}
          ></span>
          <span
            className="resize-point point-ne"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "ne")}
          ></span>
          <span
            className="resize-point point-nw"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "nw")}
          ></span>
          <span
            className="resize-point point-sw"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "sw")}
          ></span>
          <span
            className="resize-point point-se"
            onMouseUp={this.onMouseUp}
            onMouseDown={e => this.onMouseDown(e, "se")}
          ></span>
        </div>
      </div>
    );
  }
}

export default MediaResize;
