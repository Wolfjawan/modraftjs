import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button";
import HeaderButton from "./Header";
import ImageUpload from "./ImageUpload";
import ImageURL from "./ImageURL";
import ImageOptions from "./ImageOptions";
import Footer from "./Footer";
import "./styles.css";

class LayoutComponent extends Component {
  state = {
    imgSrc: "",
    dragEnter: true,
    uploadHighlighted: false,
    showImageLoading: false,
    height: "300",
    width: "500",
    alt: ""
  };

  onDragEnter = event => {
    this.stopPropagation(event);
    this.setState({
      dragEnter: true
    });
  };

  onImageDrop = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      dragEnter: false
    });
    let data;
    let dataIsItems;
    if (event.dataTransfer.items) {
      data = event.dataTransfer.items;
      dataIsItems = true;
    } else {
      data = event.dataTransfer.files;
      dataIsItems = false;
    }
    for (let i = 0; i < data.length; i += 1) {
      if (
        (!dataIsItems || data[i].kind === "file") &&
        data[i].type.match("^image/")
      ) {
        const file = dataIsItems ? data[i].getAsFile() : data[i];
        this.uploadImage(file);
      }
    }
  };

  showImageUploadOption = () => {
    this.setState({
      uploadHighlighted: true
    });
  };

  addImageFromState = e => {
    e.preventDefault();
    const { imgSrc, alt, height, width } = this.state;
    const { onChange } = this.props;
    onChange(imgSrc, height, width, alt);
  };

  showImageURLOption = () => {
    this.setState({
      uploadHighlighted: false
    });
  };

  toggleShowImageLoading = () => {
    const showImageLoading = !this.state.showImageLoading;
    this.setState({
      showImageLoading
    });
  };

  updateValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  selectImage = event => {
    if (event.target.files && event.target.files.length > 0) {
      this.uploadImage(event.target.files[0]);
    }
  };

  uploadImage = file => {
    this.toggleShowImageLoading();
    const { uploadCallback } = this.props.config;
    uploadCallback(file)
      .then(({ data }) => {
        this.setState({
          showImageLoading: false,
          dragEnter: false,
          imgSrc: data.link || data.url
        });
        this.fileUpload = false;
      })
      .catch(() => {
        this.setState({
          showImageLoading: false,
          dragEnter: false
        });
      });
  };

  fileUploadClick = event => {
    this.fileUpload = true;
    event.stopPropagation();
  };

  stopPropagation = event => {
    if (!this.fileUpload) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.fileUpload = false;
    }
  };

  render() {
    const { expanded, onExpandEvent, doCollapse } = this.props;
    const {
      imgSrc,
      uploadHighlighted,
      dragEnter,
      height,
      width,
      alt
    } = this.state;
    return (
      <div className="toolbar-controls-image-wrapper">
        <Button
          onToggle={onExpandEvent}
          active={expanded}
          icon={<FontAwesomeIcon icon={faImage} />}
          label='Image'
          hover={true}
        />
        {expanded ? (
          <div
            className={"toolbar-controls-image-modal"}
            onClick={this.stopPropagation}
          >
            <HeaderButton
              showImageURLOption={this.showImageURLOption}
              showImageUploadOption={this.showImageUploadOption}
              uploadHighlighted={uploadHighlighted}
            />
            {uploadHighlighted ? (
              <ImageUpload
                fileUploadClick={this.fileUploadClick}
                onDragEnter={this.onDragEnter}
                stopPropagation={this.stopPropagation}
                onImageDrop={this.onImageDrop}
                dragEnter={dragEnter}
                imgSrc={imgSrc}
                selectImage={this.selectImage}
              />
            ) : (
              <ImageURL imgSrc={imgSrc} updateValue={this.updateValue} />
            )}
            <ImageOptions
              updateValue={this.updateValue}
              alt={alt}
              height={height}
              width={width}
            />
            <Footer
              doCollapse={doCollapse}
              imgSrc={imgSrc}
              alt={alt}
              height={height}
              width={width}
              addImageFromState={this.addImageFromState}
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
