import { extendTheme, ComponentStyleConfig } from '@chakra-ui/react';

const VStack: ComponentStyleConfig = {
  baseStyle: {
    alignItems: 'flex-start',
  },
};

const theme = extendTheme({
  fonts: {
    body: 'Verdana, system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  styles: {
    global: {
      body: {
        background: '#161414',
        height: 'full',
        width: 'full',
        userSelect: 'none',
      },
    },
  },
  components: {
    VStack,
  },
});

export default theme;
