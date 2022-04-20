import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box, Checkbox,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';
import ButtonActive from 'components/component-custom/ButtonActive';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';
import './styles.scss';

LogInForm.propTypes = {
  onSubmit: PropTypes.func,
};

const schema = yup.object().shape({
  email: yup.string().required('Please enter email').email('Please enter valid email'),
  password: yup
    .string()
    .required('Please enter password')
    .min(6, 'Title must be at least 6 characters'),
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20 0',
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
  },
  submit: {
    backgroundColor: '#2AC37D',
    fontSize: '14px',
  },
  img: {
    width: '100px',
  },
  link: {
    fontSize: '12px',
    color: '#8d8d8d',
    textDecoration: 'underline'
  },
}));

function LogInForm(props) {
  const classes = useStyles();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const handelSubmit = (values) => {
    const { onSubmit } = props;
    console.log(values);
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <Box align="center" className={classes.root}>
      <Typography className={classes.title} component="h3" variant="h5">
        Sign In
      </Typography>

      <form onSubmit={form.handleSubmit(handelSubmit)}>
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <Box justifyContent={'space-between'} alignItems={'center'} display="flex">
          <FormControlLabel control={<Checkbox />} label="Keep me signed in"/>
          <Link href="#" underline="none" className={classes.link}>
            Forgotten your password?
          </Link>
        </Box>

        <Box>
          <Typography>
            <Box sx={{ fontFamily: 'default', m: 1, fontSize: 12 }}>
              By logging in, you agree to our <Link href="#" className={classes.link}> Privacy Policy </Link> and{' '}
              <Link href="#" className={classes.link} > Terms of Use </Link>{' '}
            </Box>
          </Typography>

          <ButtonActive content="sign in"/>

          <Box mt={2}>
           <Typography variant='p' component='p'>
              Not a Member?
              <Link href="#" className={classes.link}>
                Join Us
              </Link>
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default LogInForm;
