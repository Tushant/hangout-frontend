/**
 * Checks for each objects in list, if the 'key' key has 'value' value.
 * Case Insensitive.
 *
 */

export const mathFloor = value => (Number.isNaN(value) ? null : Math.floor(value));
export const mathCeil = value => (Number.isNaN(value) ? null : Math.ceil(value));
export const mathRound = value => (Number.isNaN(value) ? null : Math.round(value));

export const trimString = string => String(string).replace(/^\s+|\s+$/g, '');
export const capitalizeFirstLetter = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

export const roundOffDecimalDigit = (num, decimalPoints) => {
  const dp = decimalPoints || 2;
  return +`${Math.round(`${num}e+${dp}`)}e-${dp}`;
};

export const isWholeNumber = value => {
  // isNaN() returns false for null and ''
  if (value === null || value === '' || Number.isNaN(value) || value.includes('.')) {
    // NaN or Float
    return false;
  }
  return true;
};

export const getNumber = (value, defaultValue) => {
  if (typeof value === 'number') {
    // If the argument is a number just return it.
    return value;
  }

  if (value === null || value === '' || Number.isNaN(value)) {
    // NaN
    return defaultValue;
  } else if (value.includes('.')) {
    // Float
    return parseFloat(value);
  }
  // Int
  return parseInt(value, 10);
};

export const chopstring = (string, length) => {
  try {
    if (string.length > length) {
      return `${string.substring(0, length - 2)}..`;
    }
  } catch (e) {
    // continue regardless of error - return the same string
  }
  return string;
};
