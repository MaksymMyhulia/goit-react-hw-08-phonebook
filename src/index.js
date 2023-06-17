import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store.js';
import { theme } from './constants/theme.js';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/ContactBook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
