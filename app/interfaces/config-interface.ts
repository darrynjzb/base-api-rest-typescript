export interface IConfig {
  env: string;
  middewares: {
    users: {
      create: string[];
      getById: string[];
      update: string[];
      delete: string[];
    }
  }
  api: {
    port: number;
    name: string;
    version: string;
    blacklistMask: string;
  }
};
