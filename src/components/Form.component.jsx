import React, { useContext } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';

import { LanguageContext } from '../contexts/Language.context';

import styles from '../styles/form.styles';

const dictionary = {
  english: {
    email: 'Email',
    register: 'Register',
    password: 'pas  sword',
    remember: 'Remember Me',
    signin: 'Sign In',
  },
  french: {
    email: "L'email",
    register: "S'inscrire",
    password: 'Mot de Passe',
    remember: 'Souviens-toi de Moi',
    signin: 'Se Connecter',
  },
  日本語: {
    email: '電子メイル',
    register: 'レジ',
    password: 'パスワード',
    remember: '覚えて',
    signin: 'サインイン',
  },
};

function Form({ classes }) {
  const { language, setLanguage } = useContext(LanguageContext);
  const { email, register, password, remember, signin } = dictionary[language];

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{signin}</Typography>
        <Select value={language} onChange={setLanguage}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          <MenuItem value='日本語'>日本語</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' autoFocus />
          </FormControl>
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label={remember}
          />
          <Button
            variant='contained'
            type='submit'
            fullWidth
            color='primary'
            className={classes.submit}
          >
            {register}
          </Button>
        </form>
      </Paper>
    </main>
  )
}

export default withStyles(styles)(Form);