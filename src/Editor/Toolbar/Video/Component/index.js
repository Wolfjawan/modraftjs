import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button";
import Header from "./Header";
import CodeInput from "./CodeInput";
import VideoOptions from "./VideoOptions";
import Footer from "./Footer";
import "./styles.css";

class LayoutComponent extends Component {
  state = {
    videoCode: "",
    height: "315",
    width: "560",
    title: ""
  };
  addVideoCodeFromState = e => {
    e.preventDefault();
    const { videoCode, title } = this.state;
    let { height, width } = this.state;
    const { onChange } = this.props;
    if (!isNaN(height)) {
      height += "px";
    }
    if (!isNaN(width)) {
      width += "px";
    }
    onChange(videoCode, height, width, title);
  };

  updateValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { expanded, onExpandEvent, doCollapse } = this.props;
    const { videoCode, height, width, title } = this.state;
    return (
      <div className="toolbar-controls-video-wrapper">
        <Button
          onToggle={onExpandEvent}
          active={expanded}
          icon={<FontAwesomeIcon icon={faVideo} />}
          label='Video'
          hover={true}
        />
        {expanded ? (
          <div className="toolbar-controls-video-modal">
            <Header />
            <CodeInput videoCode={videoCode} updateValue={this.updateValue} />
            <VideoOptions
              updateValue={this.updateValue}
              height={height}
              width={width}
              title={title}
            />
            <Footer
              doCollapse={doCollapse}
              videoCode={videoCode}
              height={height}
              width={width}
              title={title}
              addVideoCodeFromState={this.addVideoCodeFromState}
            />
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default LayoutComponent;
