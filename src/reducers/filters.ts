import { CHANGE_FILTER } from '../constants';
import { Filter, FilterActionType } from '../types';

const BASE_FILTER: Filter = 'all';

const filter = (state = BASE_FILTER, { type, payload }: FilterActionType): Filter => {
const { activeFilter } = payload;

  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
}

export default filter;
