
import type { CodegenConfig } from '@graphql-codegen/cli';

import { JOINED_SCHEMA_PATH } from "./api/generated/generated__Schema";

const config: CodegenConfig = {
  overwrite: true,
  schema: JOINED_SCHEMA_PATH,
  generates: {
    "api/generated/generated__Types.ts": {
      plugins: ["typescript", "typescript-resolvers", "typescript-mongodb", "typescript-document-nodes"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
