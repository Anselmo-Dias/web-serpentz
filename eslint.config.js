import pluginQuery from '@tanstack/eslint-plugin-query'
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    // files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@tanstack/query': pluginQuery,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      '@tanstack/query/exhaustive-deps': 'error',
    },
  },
]




