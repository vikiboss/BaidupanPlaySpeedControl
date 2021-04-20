import { INIT_DATA } from './utils/constants';
import { DataState, fetchData, setData } from './utils/state';

const init: Function = (): DataState => {
  const data = fetchData();
  if (!data) {
    setData(INIT_DATA);
  }
  return data || INIT_DATA;
};

export default init;
