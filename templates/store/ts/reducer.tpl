import produce from 'immer';
import { {{ pascalCase name }}State, {{ pascalCase name }}Action } from './types';

export const initialState: {{ pascalCase name }}State = {
  loading: {
    {{ camelCase name }}: false,
  },
  {{ camelCase name }}: [],
};

const reducer = (state = initialState, action: {{ pascalCase name }}Action) => {
  switch (action.type) {
    case "load{{ pascalCase name }}Request":
      return produce(state, draft => {
        draft.loading.{{ camelCase name }} = true;
      });
    case "load{{ pascalCase name }}Success":
      return produce(state, draft => {
        draft.loading.{{ camelCase name }} = false;
        draft.{{ camelCase name }} = action.{{ camelCase name }};
      });
    case "load{{ pascalCase name }}Error":
      return produce(state, draft => {
        draft.loading.{{ camelCase name }} = false;
      });
    default:
      return state;
  }
};

export default reducer;
