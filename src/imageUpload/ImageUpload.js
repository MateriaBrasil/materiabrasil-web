import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import AvatarEditor from 'react-avatar-editor'
import Typography from '@material-ui/core/Typography'

import theme from '../theme'
import Dialog from './Dialog'
import ZoomControls from './ZoomControls'
import handleUpload from './handleUpload'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null,
      scale: 1,
      position: { x: 0.5, y: 0.5 },
      uploading: false,
    }

    this.handleUpload = handleUpload.bind(this)
    this.onUpload = this.onUpload.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.onPositionChange = this.onPositionChange.bind(this)
    this.setEditor = this.setEditor.bind(this)
    this.onZoomOut = this.onZoomOut.bind(this)
    this.onZoomIn = this.onZoomIn.bind(this)
  }

  setEditor(editor) {
    this.editor = editor
  }

  onUpload() {
    const { update, id } = this.props

    this.setState({ uploading: true })
    this.handleUpload({ editorImage: this.editor.getImage(), update, id })
  }

  onDrop(files) {
    this.setState({ file: files[0] })
  }

  onPositionChange(position) {
    this.setState({ position })
  }

  onZoomOut() {
    this.setState(({ scale }) => ({
      scale: scale > 1 ? scale - 0.1 : scale,
    }))
  }

  onZoomIn() {
    this.setState(({ scale }) => ({
      scale: scale + 0.1,
    }))
  }

  render() {
    const { file, scale, position, uploading } = this.state
    const { updating, title, width = 400, height = 400 } = this.props

    return (
      <Dialog
        {...this.props}
        onUpload={this.onUpload}
        disabled={!file || updating || uploading}
        uploading={uploading}
      >
        <Dropzone
          accept="image/*"
          multiple={false}
          disableClick={!!file}
          onDrop={this.onDrop}
          style={{
            textAlign: 'center',
            border: file ? 'none' : '1px dashed',
            width,
            height,
            margin: '0 auto',
            cursor: file ? 'move' : 'pointer',
          }}
          acceptStyle={{ border: `2px solid ${theme.palette.primary.main}` }}
          rejectStyle={{ border: `2px solid ${theme.palette.error.main}` }}
        >
          {file ? (
            <AvatarEditor
              ref={this.setEditor}
              width={width - 50}
              height={height - 50}
              image={file.preview}
              scale={scale}
              position={position}
              onPositionChange={this.onPositionChange}
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
          <ZoomControls onZoomOut={this.onZoomOut} onZoomIn={this.onZoomIn} />
        )}
      </Dialog>
    )
  }
}
