import { Action } from 'redux';

export interface {{ singular (pascalCase name) }} {
  name: string;
  age: number;
}

export interface LoadingState {
  {{ camelCase name }}: boolean;
}

export interface {{ pascalCase name }}State {
  loading: LoadingState;
  {{ camelCase name }}: {{ singular (pascalCase name) }}[];
}

export interface Load{{ pascalCase name }}Request extends Action {
  type: 'load{{ pascalCase name }}Request';
}

export interface Load{{ pascalCase name }}Success extends Action {
  type: 'load{{ pascalCase name }}Success';
  {{ camelCase name }}: {{ singular (pascalCase name) }}[];
}

export interface Load{{ pascalCase name }}Error extends Action {
  type: 'load{{ pascalCase name }}Error';
}

export type {{ pascalCase name }}Action =
  | Load{{ pascalCase name }}Request
  | Load{{ pascalCase name }}Success
  | Load{{ pascalCase name }}Error;
