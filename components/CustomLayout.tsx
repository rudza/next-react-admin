import * as React from 'react';
import { Layout, LayoutProps } from 'react-admin';
import { makeStyles } from '@material-ui/styles';

const AppBar = () => <div />;
const Sidebar = () => <div />;

const useStyles = makeStyles({
  appFrame: {
    marginTop: 0,
  },
});

const CustomLayout = (props: LayoutProps) => {
  const classes = useStyles();
  return (
    <Layout {...props} appBar={AppBar} sidebar={Sidebar} classes={classes} />
  );
};

export default CustomLayout;
