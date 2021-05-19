/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Suspense} from 'react';
import { Component } from 'react';
import TabBottom from './src/components/bottomTab/bottomTab'
import i18n from './src/translation';
import { I18nextProvider } from 'react-i18next'

class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
      <TabBottom />
      </I18nextProvider>
    );
  }
}

export default App;