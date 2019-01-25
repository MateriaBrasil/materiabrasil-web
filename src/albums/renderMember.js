import React from 'react'
import Dialog from 'materials/Dialog'
import { Formik } from 'formik'
import { New } from 'croods'

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
                    <input
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <p>{errors.email && touched.email && errors.email}</p>
                    <button type="submit">Submit</button>
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
