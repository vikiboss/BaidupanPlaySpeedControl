interface BtnState {
  str: string;
  rate?: number;
}

const now = new Date();
const [year, month, day] = [
  now.getFullYear(),
  now.getMonth() + 1,
  now.getDate(),
];

export const VERSION = '1.6.3';
export const AUTHOR_NAME = 'Viki';
export const DATE = `${year}/${month}/${day}`;
export const LOCAL_STORAGE_NAME = 'viki_data';
export const INIT_DATA = { rate: 1, saveRate: true, showPopup: true };
export const OPTIONS: BtnState[] = [
  { str: 'x0.5', rate: 0.5 },
  { str: 'x1.0', rate: 1.0 },
  { str: 'x1.5', rate: 1.5 },
  { str: 'x2.0', rate: 2.0 },
  { str: '加速' },
  { str: '减速' },
  { str: '自定义' },
  { str: '设置' },
  { str: '关于' },
];

export const MSG = {
  copyright: '',
};
