import { {{ singular (pascalCase name) }}, Load{{ pascalCase name }}Request, Load{{ pascalCase name }}Success, Load{{ pascalCase name }}Error } from './types';

export const load{{ pascalCase name }}Request = (): Load{{ pascalCase name }}Request => ({
  type: 'load{{ pascalCase name }}Request',
});

export const load{{ pascalCase name }}Success = ({{ camelCase name }}: {{ singular (pascalCase name) }}[]): Load{{ pascalCase name }}Success => ({
  type: 'load{{ pascalCase name }}Success',
  {{ camelCase name }},
});

export const load{{ pascalCase name }}Error = (): Load{{ pascalCase name }}Error => ({
  type: 'load{{ pascalCase name }}Error',
});
