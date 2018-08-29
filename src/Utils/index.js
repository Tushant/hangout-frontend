import action from './action';
import cookieJar from './cookieJar';

export { action, cookieJar };

export const camelToSnake = (str = '') =>
  str
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();

export const delay = ms => new Promise(res => setTimeout(res, ms));

export const isObject = obj => obj && typeof obj === 'object';

export const isArray = obj => obj && isObject(obj) && obj instanceof Array;

export const capitalizeFirstLetter = value => value && `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

export const isEmpty = obj => {
  // eslint-disable-next-line
  for (const key in obj) {
    if (key in obj) return false;
  }
  return true;
};

export function whichSystem() {
  return navigator.platform.toUpperCase();
}

export const absoulteUrl = url => {
  const urlRegx = new RegExp('^(http|https)://', 'i');
  const absoulte = urlRegx.test(url);
  if (!absoulte) return `//${url}`;
  return url;
};

export const breadCrumbify = path => {
  // eslint-disable-line import/prefer-default-export
  const spath = path.split('/');
  const breadcrumbedPath = spath
    .map(p => p.charAt(0).toUpperCase() + p.substr(1).toLowerCase())
    .slice(1, spath.length)
    .join(' / ');
  return breadcrumbedPath;
};

// This function is used to find the querystring with provided name in the url
export const findQueryString = (name, url = window.location.href) => {
  const newName = name.replace(/[[]]/g, '\\$&');
  const regex = new RegExp(`[?&]${newName}(=([^&#]*)|&|#|$)`, 'i');
  const results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

// Generate Random Color in Hex
export const randomColor = () => {
  const letters = '0123456789ABCDEF';
  const getChar = (val, length) => val[Math.floor(Math.random() * length)];
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += getChar(letters, 13);
  }
  return color;
};

export const truncate = (string, number) => {
  if (string.length > number) {
    return `${string.substring(0, number)}...`;
  }
  return string;
};
