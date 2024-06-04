import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';

import App from './App.tsx';
import './index.css';
import theme from './utils/theme.ts';
import LibraryProvider from './providers/LibraryProvider.tsx';
import UIStateProvider from './providers/UIStateProvider.tsx';
import SettingsProvider from './providers/SettingsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <LibraryProvider>
          <UIStateProvider>
            <SettingsProvider>
              <App />
            </SettingsProvider>
          </UIStateProvider>
        </LibraryProvider>
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
