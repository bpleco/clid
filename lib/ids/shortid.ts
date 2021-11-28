import shortid from 'shortid';
import copyToClipboard from '../utils/copyToClipboard';

export default () => {
  const id = shortid.generate();
  copyToClipboard(id);
};
