import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { ThemeProvider } from 'styled-components';
import { theme } from './Theme.ts';
import { GlobalStyles } from './GlobalStyles.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
