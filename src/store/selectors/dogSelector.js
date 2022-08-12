import {createSelector} from 'reselect';

export const dogSelector = state => state.dogs;

export const dogListSelector = createSelector(dogSelector, ({dogs}) => dogs);
