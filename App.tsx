import React from 'react';
import { Provider } from 'react-redux';
import store from "./src/reducers";
import AuthNavigator from "./src/navigator/AuthNavigator";


export default function App() {
  return (
      <Provider store={store}>
              <AuthNavigator />
      </Provider>
  );
}
