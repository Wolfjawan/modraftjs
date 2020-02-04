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




// 'use strict';
// const {
//   CompositeDecorator,
//   ContentBlock,
//   ContentState,
//   Editor,
//   EditorState,
//   convertFromHTML,
//   convertToRaw,
// } = Draft;

// class HTMLConvertExample extends React.Component {
//   constructor(props) {
//     super(props);

//     const decorator = new CompositeDecorator([
//       {
//         strategy: findLinkEntities,
//         component: Link,
//       },
//       {
//         strategy: findImageEntities,
//         component: Image,
//       },
//     ]);

//     const sampleMarkup =
//       '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
//       '<a href="https://www.facebook.com">Example link</a><br /><br/ >' +
//       '<img src="https://raw.githubusercontent.com/facebook/draft-js/master/examples/draft-0-10-0/convertFromHTML/image.png" height="112" width="200" />';

//     const blocksFromHTML = convertFromHTML(sampleMarkup);
//     const state = ContentState.createFromBlockArray(
//       blocksFromHTML.contentBlocks,
//       blocksFromHTML.entityMap,
//     );

//     this.state = {
//       editorState: EditorState.createWithContent(
//         state,
//         decorator,
//       ),
//     };

//     this.focus = () => this.refs.editor.focus();
//     this.onChange = (editorState) => this.setState({editorState});
//     this.logState = () => {
//       const content = this.state.editorState.getCurrentContent();
//       console.log(convertToRaw(content));
//     };
//   }

//   render() {
//     return (
//       <div style={styles.root}>
//         <div style={{marginBottom: 10}}>
//           Sample HTML converted into Draft content state
//         </div>
//         <div style={styles.editor} onClick={this.focus}>
//           <Editor
//             editorState={this.state.editorState}
//             onChange={this.onChange}
//             ref="editor"
//           />
//         </div>
//         <input
//           onClick={this.logState}
//           style={styles.button}
//           type="button"
//           value="Log State"
//         />
//       </div>
//     );
//   }
// }

// function findLinkEntities(contentBlock, callback, contentState) {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return (
//         entityKey !== null &&
//         contentState.getEntity(entityKey).getType() === 'LINK'
//       );
//     },
//     callback
//   );
// }

// const Link = (props) => {
//   const {url} = props.contentState.getEntity(props.entityKey).getData();
//   return (
//     <a href={url} style={styles.link}>
//       {props.children}
//     </a>
//   );
// };

// function findImageEntities(contentBlock, callback, contentState) {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return (
//         entityKey !== null &&
//         contentState.getEntity(entityKey).getType() === 'IMAGE'
//       );
//     },
//     callback
//   );
// }

// const Image = (props) => {
//   const {
//     height,
//     src,
//     width,
//   } = props.contentState.getEntity(props.entityKey).getData();

//   return (
//     <img src={src} height={height} width={width} />
//   );
// };

// const styles = {
//   root: {
//     fontFamily: '\'Helvetica\', sans-serif',
//     padding: 20,
//     width: 600,
//   },
//   editor: {
//     border: '1px solid #ccc',
//     cursor: 'text',
//     minHeight: 80,
//     padding: 10,
//   },
//   button: {
//     marginTop: 10,
//     textAlign: 'center',
//   },
// };
