import { ObjectID } from 'bson';
import copyToClipboard from '../utils/copyToClipboard';

export default () => {
  const id = new ObjectID().toHexString();
  copyToClipboard(id);
};
