import swal from 'sweetalert';
import $ from 'jquery';

import { DataState } from './init';

const speedControl: Function = (data: DataState): void => {
  const { rate, saveRate, showPopup } = data;
  swal('yes');
};

export default speedControl;
