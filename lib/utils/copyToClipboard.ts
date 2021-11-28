import copy from 'clipboardy';
import { success } from './logger';

export default function (value: string) {
  copy.writeSync(value);
  success(value);
}
