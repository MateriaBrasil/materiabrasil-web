import React from 'react'
import Dialog from 'materials/Dialog'
import { Formik } from 'formik'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import { New } from 'croods'
import Error from 'Error'

export default props => routeProps => {
  const validate = values => {
    let errors = {}

    if (!values.email) {
      errors.email = 'Required'
    }

    return errors
  }

  return (
    <Dialog {...props} {...routeProps} title="Adicione um membro ao álbum">
      {props.currentUser && (
        <New
          name="albumUsers"
          path="/album_users"
          render={({ create, creating, error }) => {
            return (
              <Formik
                initialValues={{ email: '' }}
                validate={validate}
                onSubmit={values => {
                  create({
                    user_email: values.email,
                    album_id: parseInt(routeProps.match.params.id, 10),
                  })
                }}
                render={({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <FormControl
                      error={touched['email'] && !!errors['email']}
                      aria-describedby="email-error-text"
                      fullWidth
                    >
                      <InputLabel htmlFor="email-error">
                        Email do membro
                      </InputLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <FormHelperText id="email-error-text">
                        {touched['email'] && errors['email']}
                      </FormHelperText>
                    </FormControl>
                    {error && <Error>{error}</Error>}
                    <Button type="submit">Adicionar</Button>
                  </form>
                )}
              />
            )
          }}
          renderCreated={() => window.location.reload()}
        />
      )}
    </Dialog>
  )
}
