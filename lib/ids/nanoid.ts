import { nanoid } from 'nanoid';
import copyToClipboard from '../utils/copyToClipboard';

export default (size: number) => {
  const id = nanoid(size);
  copyToClipboard(id);
};
