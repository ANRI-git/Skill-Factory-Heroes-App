import { Google } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const initialForm = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const isChecking = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChange } = useForm(initialForm);

  const dispatch = useDispatch();

  const onHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = (event) => {
    event.preventDefault();
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title='Login'>
      <form
        onSubmit={onHandleSubmit}
      >
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Correo'
            type='email'
            placeholder='correo@mail.com'
            fullWidth
            name='email'
            value={email}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Contraseña'
            type='password'
            placeholder='**********'
            fullWidth
            name='password'
            value={password}
            onChange={onInputChange}
          />
        </Grid>
        <Grid container spacing={1} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              variant='contained'
              fullWidth
              type='submit'
              disabled={isChecking}
            >
              <Typography sx={{ ml: 1 }}> Login</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              variant='contained'
              fullWidth
              onClick={onGoogleSignIn}
              disabled={isChecking}
            >
              <Google />
              <Typography sx={{ ml: 1 }}> Google</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='end'>
          <Link component={RouterLink} color='inherit' to='/auth/register'>
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
