import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';

import CustomLayout from "../components/CustomLayout";
import { createAdminStore } from "./createAdminStore";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const history = createHashHistory();

const App = () => (
  <Provider
  store={createAdminStore({
      dataProvider,
      history,
  })}
>
  <Admin dataProvider={dataProvider} layout={CustomLayout} history={history}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="posts" list={ListGuesser} />
  </Admin>
</Provider>
);

export default App;
