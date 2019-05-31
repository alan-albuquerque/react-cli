import { ThunkAction } from 'redux-thunk';
import { {{ pascalCase name }}State, {{ pascalCase name }}Action } from './types';
import { load{{ pascalCase name }}Request, load{{ pascalCase name }}Success, load{{ pascalCase name }}Error } from './actions';
// import * as {{ singular (camelCase name) }}Service from '../services/{{ singular (camelCase name) }}Service';

type Effect = ThunkAction<any, {{ pascalCase name }}State, any, {{ pascalCase name }}Action>;

export const load{{ pascalCase name }} = () => (dispatch: any, getState: any) => {
  dispatch(load{{ pascalCase name }}Request());
  // return {{ singular (camelCase name) }}Service.load{{ pascalCase name }}()
    // .then({{ camelCase name }} => dispatch(load{{ pascalCase name }}Success({{ camelCase name }})))
    // .catch(() => dispatch(load{{ pascalCase name }}Error()));
};
