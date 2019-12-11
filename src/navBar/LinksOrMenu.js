import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from './MobileMenuIcon';
import Menu from './Menu';
import Links from './Links';
import Colors from '../Colors';

export default class extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Media query="(max-width:1024px)">
        {matches =>
          matches ? (
            <Fragment>
              <IconButton onClick={this.handleClick}>
                <MenuIcon
                  color={Colors.white}
                  // color={this.props.isInstitutionalPage && Colors.white}
                />
              </IconButton>
              <Menu
                {...this.props}
                open={open}
                anchorEl={anchorEl}
                handleClose={this.handleClose}
              />
            </Fragment>
          ) : (
            <Links {...this.props} />
          )
        }
      </Media>
    );
  }
}
