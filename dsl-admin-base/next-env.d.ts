/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.graphqls' {
  import { DocumentNode } from 'graphql';
  export default typeof DocumentNode;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const value: DocumentNode;
  export = value;
}

declare module '*.svg';
