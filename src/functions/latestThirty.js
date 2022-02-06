import { ONE, THIRTY } from '../constants/list';

const latestThirty = (array) => {
  const totalLength = array.length;
  if (totalLength > THIRTY) {
    const filteredArray = array.filter((_item, index) => index > ((totalLength - ONE) - THIRTY));
    return filteredArray;
  }
  return array;
};

export default latestThirty;
