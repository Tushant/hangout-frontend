/*
Enum param is entered by user in csv fromat, and alternative values are seperated by pipe.
*/
import { trimString } from './helper';

export const convertEnumStringToList = string => {
  const list = [];
  let values;
  if (string) {
    values = string.split(',');
    for (let i = 0; i < values.length; i += 1) {
      const value = trimString(values[i]);
      const aliases = value.split('|');
      list[i] = [];
      for (let j = 0; j < aliases.length; j += 1) {
        const alias = trimString(aliases[j]);
        if (alias) {
          list[i][j] = alias;
        }
      }
    }
  }
  return list;
};

export const convertListToEnumString = list => {
  let string;
  for (let i = 0; i < list.length; i += 1) {
    let value;
    for (let j = 0; j < list[i].length; j += 1) {
      if (value === undefined) {
        value = list[i][j];
      } else {
        value += `|${list[i][j]}`;
      }
    }
    if (string === undefined) {
      string = value;
    } else {
      string += `, ${value}`;
    }
  }
  return string;
};

export const getDisplayString = (item, list) => {
  // First item in the list is Display String
  if (!item) {
    return null;
  }
  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < list[i].length; j += 1) {
      if (list[i][j] === item) {
        return list[i][0]; // First value is what we display
      }
    }
  }
  return null;
};
