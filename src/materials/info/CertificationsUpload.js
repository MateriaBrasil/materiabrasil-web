import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import handleUpload from './handleUpload'
import Loading from '../../Loading'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = { uploading: false }
    this.handleFileChange = this.handleFileChange.bind(this)
  }

  handleFileChange(event) {
    this.setState({ uploading: true })

    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]

    const { id, actions } = this.props
    handleUpload({
      file,
      id,
      attributeName: 'certificationsUrl',
      update: attributes => {
        this.setState({ uploading: false })
        actions.update(attributes)
      },
    })
  }

  render() {
    const { uploading } = this.state

    return (
      <div style={{ display: 'inline-block' }}>
        {uploading ? (
          <Loading
            size={32}
            style={{ textAlign: 'left', marginBottom: 24, marginLeft: 24 }}
          />
        ) : (
          <Button
            variant="raised"
            color="primary"
            style={{ marginBottom: 24, marginLeft: 24 }}
            onClick={() => this.fileInput.click()}
          >
            Enviar certificações
          </Button>
        )}

        <input
          type="file"
          ref={ref => (this.fileInput = ref)}
          style={{ display: 'none' }}
          onChange={this.handleFileChange}
        />
      </div>
    )
  }
}
