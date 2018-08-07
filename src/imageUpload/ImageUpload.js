import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import AvatarEditor from 'react-avatar-editor'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'
import { canvasToBlob, blobToBinaryString } from 'blob-util'
import md5 from 'md5'
import AWS from 'aws-sdk'

import theme from '../theme'
import Dialog from './Dialog'

const title = 'Arraste uma imagem ou clique para escolher o arquivo.'

const parseCanvas = async canvas => {
  const blob = await canvasToBlob(canvas, 'image/jpeg')
  return { md5: md5(await blobToBinaryString(blob)), blob }
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null,
      scale: 1,
      position: { x: 0.5, y: 0.5 },
      uploading: false,
    }
    this.onUpload = this.handleUpload.bind(this)
    this.setEditor = this.handleSetEditor.bind(this)
  }

  handleSetEditor(editor) {
    this.editor = editor
  }

  async handleUpload(update, id) {
    const image = await parseCanvas(this.editor.getImage())

    AWS.config.update({
      region: process.env.REACT_APP_AWS_REGION,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: `${process.env.REACT_APP_AWS_REGION}:${
          process.env.REACT_APP_AWS_IDENTITY_POOL_ID
        }`,
      }),
    })

    var s3 = new AWS.S3({
      params: { Bucket: process.env.REACT_APP_AWS_BUCKET_NAME },
    })

    s3.upload(
      {
        Key: `uploads//${image.md5}.jpg`,
        Body: image.blob,
        ACL: 'public-read',
      },
      function(err, data) {
        if (err) {
          console.log(err)
        } else {
          update({ id, imageUrl: data.Location })
        }
      },
    )
  }

  render() {
    const { file, scale, position } = this.state
    const { update, updating, id } = this.props

    return (
      <Dialog
        {...this.props}
        onUpload={() => {
          this.setState({ uploading: true })
          this.onUpload(update, id)
        }}
        disabled={!file || updating || this.state.uploading}
        uploading={this.state.uploading}
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
            cursor: 'pointer',
          }}
          acceptStyle={{ border: `2px solid ${theme.palette.primary.main}` }}
          rejectStyle={{ border: `2px solid ${theme.palette.error.main}` }}
        >
          {file ? (
            <AvatarEditor
              ref={this.setEditor}
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
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <IconButton
              onClick={() =>
                this.setState(({ scale }) => ({
                  scale: scale > 1 ? scale - 0.1 : scale,
                }))
              }
            >
              <ZoomOutIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                this.setState(({ scale }) => ({
                  scale: scale + 0.1,
                }))
              }
            >
              <ZoomInIcon />
            </IconButton>
          </div>
        )}
      </Dialog>
    )
  }
}
