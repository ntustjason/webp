import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './App';

import  ThemeProvider from '@mui/system/ThemeProvider';
import  theme  from './Theme';
const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
      <LoginPage />
      </ThemeProvider>
  </React.StrictMode>,
  rootElement
);