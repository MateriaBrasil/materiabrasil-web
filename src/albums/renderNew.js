import React from 'react'
import { New } from 'croods'
import { Formik } from 'formik'

import Dialog from 'materials/Dialog'

export default props => routeProps => {
  const validate = values => {
    let errors = {}

    if (!values.name) {
      errors.name = 'Required'
    }

    return errors
  }
  const { history } = routeProps

  return (
    <Dialog {...props} {...routeProps} title="Adicionar novo álbum">
      <New
        name="albums"
        render={({ create }) => (
          <Formik
            initialValues={{ name: '' }}
            validate={validate}
            onSubmit={values => {
              create({
                name: values.name,
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
                  id="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p>{errors.name && touched.name && errors.name}</p>
                <button type="submit">Submit</button>
              </form>
            )}
          />
        )}
        renderCreated={() =>
          history.push(`/materials/${props.match.params.id}/albums`)
        }
      />
    </Dialog>
  )
}
