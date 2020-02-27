import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from './actionTypes';

export const setPhysicianFilterText = (filterText) => {
  return {
    type: actionTypes.SET_PHY_FILTER_TEXT,
    filter: filterText
  };
};