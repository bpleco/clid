import copyToClipboard from '../utils/copyToClipboard';

export default () => {
  const id = Date.now().toString();
  copyToClipboard(id);
};
