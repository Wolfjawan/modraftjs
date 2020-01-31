import Embedded from "./Embedded";
import imageComponent from "./Image";
import videoComponent from "./Video";

const MediaBlockRenderFunc = config => block => {
  if (block.getType() === "atomic" && block.getEntityAt(0)) {
    const contentState = config.getEditorState().getCurrentContent();
    const entity = contentState.getEntity(block.getEntityAt(0));
    if (entity && entity.type === "image") {
      return {
        component: imageComponent(config),
        editable: false
      };
    } else if (entity && entity.type === "embedded-link") {
      return {
        component: Embedded,
        editable: false
      };
    } else if (entity && entity.type === "video") {
      return {
        component: videoComponent(config),
        editable: false
      };
    }
  }
  return undefined;
};

export default MediaBlockRenderFunc;
