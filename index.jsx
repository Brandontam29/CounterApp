import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer as NavigationProvider } from '@react-navigation/native';
import App from './src/App';

import configureStore from './src/store/configureStore';

const Application = () => (
    <ReduxProvider store={configureStore()}>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </ReduxProvider>
);

export default Application;
