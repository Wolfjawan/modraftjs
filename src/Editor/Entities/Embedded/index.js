import React from "react";
export default ({ block, contentState }) => {
  const entity = contentState.getEntity(block.getEntityAt(0));
  const { src, height, width, title } = entity.getData();
  return (
    <iframe
      height={height}
      width={width}
      src={src}
      frameBorder="0"
      allowFullScreen
      title={title}
    />
  );
};
