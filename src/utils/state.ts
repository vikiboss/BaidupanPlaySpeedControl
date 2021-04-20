import { LOCAL_STORAGE_NAME } from './constants';

export interface DataState {
  rate: number;
  saveRate: boolean;
  showPopup: boolean;
}

const LS = window.localStorage;

export const fetchData = (): DataState | Boolean => {
  return JSON.parse(LS.getItem(LOCAL_STORAGE_NAME)) || false;
};

export const setData = (data: DataState) => {
  const DATA = JSON.stringify(data);
  LS.setItem(LOCAL_STORAGE_NAME, DATA);
};
