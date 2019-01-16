import React, { Component } from 'react'
import filter from 'lodash/filter'
import { Form } from 'formik'
import { Button } from '@material-ui/core'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

import Field from './Field'
import fields from './fields'
import onFocus from './onFocus'
import './Form.css'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focused: '',
    }

    this.onFocus = onFocus.bind(this)
  }

  commonProperties() {
    return {
      handleChange: this.props.handleChange,
      handleBlur: this.props.handleBlur,
      setFieldValue: this.props.setFieldValue,
      onFocus: target => this.onFocus(target),
    }
  }

  renderFields() {
    const { numberOfCards } = this.props

    const predicate = ({ name }) =>
      numberOfCards === 'one' ? name !== 'value' : true

    return filter(fields(this.props), predicate).map(element => (
      <Field
        key={element.name}
        touched={this.props.touched}
        errors={this.props.errors}
        type={element.type || 'text'}
        value={this.props.values[element.name]}
        {...element}
        {...this.commonProperties()}
      />
    ))
  }

  render() {
    return (
      <Form className="distance-fields">
        <div className="credit-card">
          <Cards
            number={this.props.values.number}
            name={this.props.values.name}
            expiry={this.props.values.expiry}
            cvc={this.props.values.cvc}
            focused={this.state.focused}
            placeholders={{ name: 'Seu nome' }}
          />
        </div>
        {this.renderFields()}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={this.props.isSubmitting}
        >
          Finalizar
        </Button>
      </Form>
    )
  }
}
