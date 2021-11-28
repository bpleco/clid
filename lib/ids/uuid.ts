import { v4 } from 'uuid';
import copyToClipboard from '../utils/copyToClipboard';

export default () => {
  const id = v4();
  copyToClipboard(id);
};
