import * as React from 'react';
import { Layout, LayoutProps } from 'react-admin';

import CustomAppBar from './CustomAppBar';

const CustomLayout = (props: LayoutProps) => <Layout {...props} appBar={CustomAppBar} />;

export default CustomLayout;
