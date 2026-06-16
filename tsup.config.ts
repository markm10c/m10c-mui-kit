import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'theme/index': 'src/theme/index.ts',
    'components/index': 'src/components/index.ts',
    'form/index': 'src/form/index.ts',
    'hooks/index': 'src/hooks/index.ts',
  },
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'react-typed-form',
    'react-hot-toast',
    'date-fns',
    '@mui/material',
    '@mui/system',
    '@mui/utils',
    '@mui/x-date-pickers',
  ],
});
