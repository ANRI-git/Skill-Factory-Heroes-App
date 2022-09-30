import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmail } from '../../store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from 'react-router-dom';

const formData = {
  email: '',
  password: '',
  displayName: '',
};

const formValidations = {
  email: [
    [(value) => value.includes('@'), 'El correo debe contener un @'],
    [
      (value) =>
        value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      'El correo debe tener un formato válido',
    ],
  ],
  password: [
    [
      (value) => value.length >= 6,
      'La contraseña debe contener al menos 6 caracteres/números',
    ],
  ],
  displayName: [
    [(value) => value.length >= 1, 'El nombre es obligatorio'],
    [(value) => value.length >= 6, 'El nombre debe tener al menos 6 letras'],
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmited, setFormSubmited] = useState(false);
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    passwordValid,
    emailValid,
  } = useForm(formData, formValidations);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmail(formState));
  };
  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={handleOnSubmit}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            type='text'
            fullWidth
            placeholder='Enter your name'
            name='displayName'
            value={displayName}
            error={!!displayNameValid && formSubmited}
            helperText={formSubmited && displayNameValid}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            type='text'
            fullWidth
            placeholder='Enter your email'
            name='email'
            value={email}
            error={!!emailValid && formSubmited}
            helperText={formSubmited && emailValid}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            type='password'
            fullWidth
            placeholder='Enter your password'
            name='password'
            value={password}
            error={!!passwordValid && formSubmited}
            helperText={formSubmited && passwordValid}
            onChange={onInputChange}
          />
        </Grid>
        <Grid container spacing={1} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              variant='contained'
              fullWidth
              type='submit'
              disabled={!isFormValid && formSubmited}
            >
              <Typography sx={{ ml: 1 }}> Crear Cuenta</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='end'>
          <Link component={RouterLink} color='inherit' to='/auth/login'>
            Ya tengo una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
