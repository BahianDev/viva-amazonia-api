declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    SECRET_KEY: string;
    REFRESH_TOKEN_KEY: string;
  }
}
