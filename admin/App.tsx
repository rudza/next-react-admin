import * as React from "react";
import { AuthContext, DataProviderContext, TranslationProvider, Resource, Notification, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import defaultMessages from 'ra-language-english';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import withContext from 'recompose/withContext'; // You should add recompose/withContext to your dependencies

import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CustomLayout from "../components/CustomLayout";
import createAdminStore from "./createAdminStore";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const i18nProvider = polyglotI18nProvider(locale => {
  return defaultMessages;
});

const history = createHashHistory();
const theme = createTheme();

const App = () => (
  <Provider
    store={createAdminStore({
        // authProvider,
        dataProvider,
        history,
    })}
  >
    <DataProviderContext.Provider value={dataProvider}>
      <TranslationProvider
          locale="en"
          i18nProvider={i18nProvider}
      >
        <ThemeProvider theme={theme}>
          <Resource name="users" list={ListGuesser} />
          <Resource name="posts" list={ListGuesser} />

          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/posts" render={(routeProps: any) => <ListGuesser hasCreate resource="posts" basePath={routeProps.match.url} {...routeProps} />} />
              <Route exact path="/users" render={(routeProps: any) => <ListGuesser hasCreate resource="users" basePath={routeProps.match.url} {...routeProps} />} />
            </Switch>
          </ConnectedRouter>
          <Notification />
        </ThemeProvider>
      </TranslationProvider>
    </DataProviderContext.Provider>

  </Provider>
);

export default App;
