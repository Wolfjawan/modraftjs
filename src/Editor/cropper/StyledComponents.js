import styled from "styled-components";

export const Wrapper = styled.div`
  .cropper-center:before,
  .cropper-center:after {
    background-color: #39f;
    content: " ";
    display: block;
    position: absolute;
  }
  .cropper-center:before {
    height: 1px;
    left: -10px;
    top: 0;
    width: 20px;
  }
  .cropper-center:after {
    height: 20px;
    left: 0;
    top: -10px;
    width: 1px;
  }
  .cropper-face,
  .cropper-line,
  .cropper-point {
    display: block;
    height: 100%;
    opacity: 0.1;
    position: absolute;
    width: 100%;
  }
  .cropper-face {
    background-color: #39f;
    left: 0;
    top: 0;
  }
  .cropper-line {
    background-color: #39f;
  }
  .cropper-line.line-e {
    cursor: ew-resize;
    right: -3px;
    top: 0;
    width: 5px;
  }
  .cropper-line.line-n {
    cursor: ns-resize;
    height: 5px;
    left: 0;
    top: -3px;
  }
  .cropper-line.line-w {
    cursor: ew-resize;
    left: -3px;
    top: 0;
    width: 5px;
  }
  .cropper-line.line-s {
    bottom: -3px;
    cursor: ns-resize;
    height: 5px;
    left: 0;
  }
  .cropper-point {
    background-color: #39f;
    height: 20px;
    opacity: 0.9;
    width: 20px;
    border-radius: 50%;

    &:before {
      content: "";
      display: table;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: black;
      opacity: 0.8;
      z-index: 11;
      position: absolute;
      top: calc(50% - 4px);
      left: calc(50% - 4px);
    }
  }
  .cropper-point.point-e {
    cursor: ew-resize;
    margin-top: -10px;
    right: -10px;
    top: 50%;
  }
  .cropper-point.point-n {
    cursor: ns-resize;
    left: 50%;
    margin-left: -10px;
    top: -10px;
  }
  .cropper-point.point-w {
    cursor: ew-resize;
    left: -10px;
    margin-top: -10px;
    top: 50%;
  }
  .cropper-point.point-s {
    bottom: -10px;
    cursor: s-resize;
    left: 50%;
    margin-left: -10px;
  }
  .cropper-point.point-ne {
    cursor: nesw-resize;
    right: -10px;
    top: -10px;
  }
  .cropper-point.point-nw {
    cursor: nwse-resize;
    left: -10px;
    top: -10px;
  }
  .cropper-point.point-sw {
    bottom: -10px;
    cursor: nesw-resize;
    left: -10px;
  }
  .cropper-point.point-se {
    bottom: -10px;
    cursor: nwse-resize;
    height: 20px;
    right: -10px;
    width: 20px;
  }
`;
