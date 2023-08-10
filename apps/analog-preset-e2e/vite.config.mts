/// <reference types="vitest" />

import { defineConfig } from 'vite';
import nx from '@nx/devkit';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: 'tests',
    test: {
      globals: true,
      environment: 'node',
      include: ['**/*.spec.ts'],
      cache: {
        dir: `${nx.offsetFromRoot(
          'apps/analog-preset-e2e'
        )}/node_modules/.vitest/analog-preset-e2e`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});