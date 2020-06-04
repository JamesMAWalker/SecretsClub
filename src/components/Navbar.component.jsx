import React, { useContext } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';

import { ThemeContext } from '../contexts/Theme.context';
import { LanguageContext } from '../contexts/Language.context';

import styles from '../styles/navbar.styles';

const emoji = {
  english: '🏈',
  french: '🧀',
  日本語: '🍥'
};

function Navbar({ classes }) {
  const { language } = useContext(LanguageContext);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span className={classes.emoji}>{emoji[language]}</span>
              <Typography
                className={classes.title}
                variant='h6'
                color='inherit'
              >
                SECRETS CLUB
              </Typography>
              <Switch onChange={toggleDarkMode} />
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder='Search...'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
  )
}

export default withStyles(styles)(Navbar);