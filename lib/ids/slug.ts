import slug from 'slug';
import copyToClipboard from '../utils/copyToClipboard';

export default (text: string) => {
  const id = slug(text);
  copyToClipboard(id);
};
