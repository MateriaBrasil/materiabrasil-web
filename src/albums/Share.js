import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

export default class extends Component {
  render() {
    return (
      <Link
        to={
          this.props.subscribed
            ? `/albums/${this.props.match.params.id}/member`
            : `/albums/${this.props.match.params.id}/premium`
        }
        style={{
          textDecoration: 'none',
          marginRight: 20,
        }}
      >
        <Button variant="contained" color="primary">
          Compartilhar álbum
        </Button>
      </Link>
    )
  }
}
