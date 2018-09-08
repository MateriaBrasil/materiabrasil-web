import React from 'react'
import Dropzone from 'react-dropzone'
import AvatarEditor from 'react-avatar-editor'
import Typography from '@material-ui/core/Typography'
import theme from '../theme'

export default props => {
  const { file, scale, position, title, width, height } = props
  const { setEditor, onDrop, onPositionChange } = props
  return (
    <Dropzone
      accept="image/*"
      multiple={false}
      disableClick={!!file}
      onDrop={onDrop}
      style={{
        textAlign: 'center',
        border: file ? 'none' : '1px dashed',
        width,
        height,
        maxHeight: '100%',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        cursor: file ? 'move' : 'pointer',
      }}
      acceptStyle={{ border: `2px solid ${theme.palette.primary.main}` }}
      rejectStyle={{ border: `2px solid ${theme.palette.error.main}` }}
    >
      {file ? (
        <AvatarEditor
          ref={setEditor}
          width={width - 50}
          height={height - 50}
          image={file.preview}
          scale={scale}
          position={position}
          onPositionChange={onPositionChange}
        />
      ) : (
        <Typography
          variant="headline"
          style={{
            width: 300,
            position: 'relative',
            top: height / 2 - 60,
          }}
        >
          {title || 'Arraste uma imagem ou clique para escolher o arquivo.'}
        </Typography>
      )}
    </Dropzone>
  )
}
