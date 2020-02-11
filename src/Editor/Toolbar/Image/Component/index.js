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
    showImageLoading: false,
    height: "300",
    width: "500",
    alt: ""
  };

  showImageOptions = uploadHighlighted => {
    this.setState({
      uploadHighlighted
    });
  };

  addImageFromState = e => {
    e.preventDefault();
    const { imgSrc, alt, height, width } = this.state;
    const { onChange } = this.props;
    onChange(imgSrc, height, width, alt);
  };

  toggleShowImageLoading = () => {
    this.setState({
      showImageLoading: true
    });
  };

  updateValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  selectImage = event => {
    if (event.target.files && event.target.files.length > 0) {
      this._uploadImage(event.target.files[0]);
    }
  };

  _uploadImage = async file => {
    this.toggleShowImageLoading();
    const { uploadImage } = this.props;
    try {
      const response = await uploadImage(file);
      this.setState({
        showImageLoading: false,
        imgSrc: response.link || response.url
      });
    } catch (err) {
      this.setState({
        showImageLoading: false
      });
    }
  };

  render() {
    const { expanded, onExpandEvent, doCollapse, uploadImage } = this.props;
    const {
      imgSrc,
      uploadHighlighted,
      height,
      width,
      alt,
      showImageLoading
    } = this.state;
    return (
      <div className="toolbar-controls-image-wrapper">
        <Button
          onToggle={onExpandEvent}
          active={expanded}
          icon={<FontAwesomeIcon icon={faImage} />}
          label="Image"
          hover={true}
        />
        {expanded ? (
          <div
            className={"toolbar-controls-image-modal"}
            onClick={this.stopPropagation}
          >
            <HeaderButton
              showImageOptions={this.showImageOptions}
              uploadHighlighted={uploadHighlighted}
              uploadImage={uploadImage}
            />
            {uploadHighlighted ? (
              <ImageUpload
                selectImage={this.selectImage}
                imgSrc={imgSrc}
                showImageLoading={showImageLoading}
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
