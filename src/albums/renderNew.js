import React from 'react'
import { New } from 'croods'
import { Formik } from 'formik'
import Button from '@material-ui/core/Button'
import Dialog from 'materials/Dialog'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'

export default props => routeProps => {
  const validate = values => {
    let errors = {}

    if (!values.name) {
      errors.name = 'Required'
    }

    return errors
  }
  const { history } = routeProps
  const { setCurrentUser, currentUser } = props

  return (
    <Dialog {...props} {...routeProps} title="Adicionar novo álbum">
      {currentUser && (
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
                  <FormControl
                    error={touched['name'] && !!errors['name']}
                    aria-describedby="name-error-text"
                    fullWidth
                  >
                    <InputLabel htmlFor="name-error">Nome do album</InputLabel>
                    <Input
                      id="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <FormHelperText id="name-error-text">
                      {touched['name'] && errors['name']}
                    </FormHelperText>
                  </FormControl>
                  <Button type="submit">Adicionar</Button>
                </form>
              )}
            />
          )}
          renderCreated={album => {
            setCurrentUser({
              ...currentUser,
              albums: [...currentUser.albums, album],
            })
            history.push(`/materials/${routeProps.match.params.id}/albums`)
          }}
        />
      )}
      {!props.currentUser && (
        <Typography color="inherit">
          Você não está logado, se logue para continuar
        </Typography>
      )}
    </Dialog>
  )
}
