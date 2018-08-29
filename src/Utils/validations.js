import { isObject, isArray } from 'Utils';
/**
 * Checks for each objects in list, if the 'key' key has 'value' value.
 * Case Insensitive.
 *
 */
export const isDuplicate = (list, key, value) => {
  const lowerCaseValue = value.toLowerCase();
  console.log('lowerCaseValue', lowerCaseValue, list);
  if (isArray(list)) {
    if (list.filter(d => d.get(key).toLowerCase() === lowerCaseValue).length !== 0) {
      //eslint-disable-line
      return true;
    }
    return false;
  }
  if (isObject(list)) {
    console.log(Object.keys(list).filter(objectKey => console.log('objectKey', objectKey)));
  }
  return false;
};
