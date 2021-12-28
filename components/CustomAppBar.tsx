import * as React from 'react';
import { AppBar, AppBarProps } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import Logo from './Logo';

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
});

const CustomAppBar = (props: AppBarProps) => {
  const classes = useStyles();
  return (
    <AppBar {...props} color="primary">
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      {/* <Logo /> */}
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default CustomAppBar;
