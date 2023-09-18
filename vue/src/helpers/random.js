import mulberry32 from '@/helpers/mulberry32';
import stringCharsToNumber from '@/helpers/stringCharsToNumber';

export default (seed = '') => {
  const randomNumber = mulberry32(stringCharsToNumber(seed));
  return (limit) => Math.round(randomNumber() * limit);
};
