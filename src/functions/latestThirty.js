import { THIRTY } from '../constants/list';

const latestThirty = (array) => {
  console.log('chamou a função');
  const totalLength = array.length;
  if (totalLength > THIRTY) {
    console.log('entrou na condição');
    const filteredArray = array.filter((_item, index) => index > ((totalLength - 1) - THIRTY));
    console.log(filteredArray);
    return filteredArray;
  }
  return array;
};

export default latestThirty;
