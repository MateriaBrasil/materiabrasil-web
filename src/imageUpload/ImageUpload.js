import React, { Component } from 'react'

import Dialog from './Dialog'
import ZoomControls from './ZoomControls'
import handleUpload from './handleUpload'
import DropZone from './DropZone'

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
    const { update, id, attributeName } = this.props

    this.setState({ uploading: true })
    this.handleUpload({
      editorImage: this.editor.getImage(),
      update,
      id,
      attributeName,
    })
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
    const { file, uploading } = this.state
    const { updating, ...props } = this.props
    return (
      <Dialog
        {...props}
        onUpload={this.onUpload}
        disabled={!file || updating || uploading}
        cancelDisabled={updating || uploading}
        uploading={uploading}
      >
        <DropZone
          {...this.props}
          state={this.state}
          onDrop={this.onDrop}
          setEditor={this.setEditor}
          onPositionChange={this.onPositionChange}
        />
        {file && (
          <ZoomControls onZoomOut={this.onZoomOut} onZoomIn={this.onZoomIn} />
        )}
      </Dialog>
    )
  }
}
