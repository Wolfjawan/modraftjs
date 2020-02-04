import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
  convertFromRaw
} from "draft-js";

export const _convertFromRow = (editorState, contentState) => {
  const newEditorState = convertFromRaw(contentState);
  return EditorState.push(editorState, newEditorState);
};
export const _convertFromHTML = (editorState, html) => {
  const blocksFromHTML = convertFromHTML(html);
  const blockArray = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  return EditorState.push(editorState, blockArray);
};

export const _convertToRaw = editorState => {
  const contentState = editorState.getCurrentContent();
  return convertToRaw(contentState);
};

export const _convertEditorStateToRawJS = editorState => {
  const contentState = editorState.getCurrentContent();
  return JSON.stringify(contentState, null, 2);
};
export const _convertContentStateToRawJS = contentState => {
  if (contentState && contentState.blocks) {
    return JSON.stringify(contentState, null, 2);
  } else return "";
};
