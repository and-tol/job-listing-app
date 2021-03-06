// Generated by https://quicktype.io

export interface IFilterType {
  [key: string]: string
}

export interface IDataType {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: RoleType | string;
  level: LevelType | string;
  postedAt: string;
  contract: ContractType | string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface IPositionType {
  role: string;
  level: string;
  languages: string[],
  tools: string[];
}

export type ContractType = ['Contract', 'Full Time', 'Part Time'];
export enum Contract {
  Contract = 'Contract',
  FullTime = 'Full Time',
  PartTime = 'Part Time',
}

export type LevelType = ['Junior', 'Midweight', 'Senior'];
export enum Level {
  Junior = 'Junior',
  Midweight = 'Midweight',
  Senior = 'Senior',
}

export type RoleType = ['Backend', 'Frontend', 'Fullstack'];
export enum Role {
  Backend = 'Backend',
  Frontend = 'Frontend',
  Fullstack = 'Fullstack',
}

export type ActionType = {
  type: string;
  payload?: any;
  error?: any;
};
