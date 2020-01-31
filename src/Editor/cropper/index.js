import React, { Component } from "react";
import Cropper from "cropperjs";
import { Wrapper } from "./StyledComponents";
import "cropperjs/dist/cropper.css";

export default class extends Component {
  state = {
    canvas: null,
    activeTab: "",
    operations: [],
    canvasOriginal: null,
    initialZoom: 1
  };
  updateState = (props, callback = () => {}) => {
    this.setState(props, callback);
  };
  componentDidMount() {
    this.onInitCrop();
  }
  onInitCrop = () => {
    this.updateState({ isHideCanvas: true, isShowSpinner: true }, () => {
      const canvas = window.document.getElementById("canvas-image-edit-box");
      this.cropper = new Cropper(canvas, {
        viewMode: 1,
        modal: false,
        background: false,
        rotatable: false,
        scalable: false,
        zoomable: false,
        movable: false,
        checkCrossOrigin: false,
        crop: event => {
          this.props.setEntityImageOptions(
            event.detail.height,
            event.detail.width
          );
          this.updateState({ cropDetails: event });
        }
      });
    });
  };
  destroyCrop = () => {
    this.cropper.destroy();
  };
  render() {
    const { src, alt, height, width } = this.props;
    return (
      <Wrapper>
        <img
          id="canvas-image-edit-box"
          src={src}
          alt={alt}
          style={{ height, width }}
        />
      </Wrapper>
    );
  }
}
