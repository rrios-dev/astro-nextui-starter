
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://0.0.0.0:1337/graphql',
  documents: 'src/**/*.graphql',
  generates: { './src/pods/apollo/types.ts': { plugins: ['typescript', 'typescript-operations'] } }
};

export default config;
