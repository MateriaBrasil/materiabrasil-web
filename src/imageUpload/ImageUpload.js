import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import AvatarEditor from 'react-avatar-editor'
import Typography from '@material-ui/core/Typography'

import theme from '../theme'
import Dialog from './Dialog'
import ZoomControls from './ZoomControls'
import handleUpload from './s3upload/handleUpload'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null,
      scale: 1,
      position: { x: 0.5, y: 0.5 },
      uploading: false,
    }
    this.onUpload = handleUpload.bind(this)
    this.editor = React.createRef()
  }

  setEditor(editor) {
    this.editor = editor
  }

  render() {
    const { file, scale, position, uploading } = this.state
    const { update, updating, id, title } = this.props

    return (
      <Dialog
        {...this.props}
        onUpload={() => {
          this.setState({ uploading: true })
          this.onUpload({ editorImage: this.editor.getImage(), update, id })
        }}
        disabled={!file || updating || uploading}
        uploading={uploading}
      >
        <Dropzone
          accept="image/*"
          multiple={false}
          disableClick={!!file}
          onDrop={files => this.setState({ file: files[0] })}
          style={{
            textAlign: 'center',
            border: file ? 'none' : '1px dashed',
            width: 400,
            height: 400,
            margin: '0 auto',
            cursor: file ? 'move' : 'pointer',
          }}
          acceptStyle={{ border: `2px solid ${theme.palette.primary.main}` }}
          rejectStyle={{ border: `2px solid ${theme.palette.error.main}` }}
        >
          {file ? (
            <AvatarEditor
              ref={this.setEditor.bind(this)}
              width={350}
              height={350}
              image={file.preview}
              scale={scale}
              position={position}
              onPositionChange={position => this.setState({ position })}
            />
          ) : (
            <Typography
              variant="headline"
              style={{ width: 300, position: 'absolute', left: 50, top: 150 }}
            >
              {title}
            </Typography>
          )}
        </Dropzone>
        {file && (
          <ZoomControls
            onZoomOut={() =>
              this.setState(({ scale }) => ({
                scale: scale > 1 ? scale - 0.1 : scale,
              }))
            }
            onZoomIn={() =>
              this.setState(({ scale }) => ({
                scale: scale + 0.1,
              }))
            }
          />
        )}
      </Dialog>
    )
  }
}
