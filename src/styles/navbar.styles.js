import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = (theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '7vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // padding: '.5rem',
    fontSize: '12px',
  },
  grow: {
    flexGrow: '1',
  },
  emoji: {
    padding: '.5rem'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, .15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, .3),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing.unit,
    paddingLeft: `${theme.spacing.unit * 10}px !important`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '120px',
      "&:focus": {
        width: '200px'
      }
    }
  }
});

export default styles;
