import crypto from 'crypto';
import copyToClipboard from '../utils/copyToClipboard';

export default (text: string, secret: string) => {
  const hash = crypto.createHmac('md5', secret || '');
  const id = hash.update(text).digest('hex');

  copyToClipboard(id);
};
