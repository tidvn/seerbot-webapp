export interface ObjectMultiLanguageProps {
    [x: string]: string;
  }
  
  export type GetObjectLabel = (
    key: string,
    obj: object
  ) => ObjectMultiLanguageProps;