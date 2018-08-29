const getSession = (keyName = 'sessionKey') => {
  // Get name followed by anything except a semicolon
  const cookiestring = RegExp(`${keyName}[^;]+`).exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  let localVar = cookiestring ? decodeURIComponent(cookiestring.toString().replace(/^[^=]+./, '')) : null;
  return localVar;
};

const setSession = (keyName = 'sessionKey', value) => {
  const now = new Date();
  // cookie set for 60 days(in milliseconds)
  const exp = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
  const expires = `expires=${exp.toUTCString()}`;
  document.cookie = `${keyName}=${value};${expires};path=/`;
};

const clearSession = (keyName = 'sessionKey') => {
  document.cookie = `${keyName}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;`;
};

const clearAll = () => {
  const cookies = document.cookie.split(';');
  cookies.forEach(cookie => {
    const eqPos = cookie.indexOf('=');
    const key = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    clearSession(key);
  });
};

export default {
  getSession,
  setSession,
  clearSession,
  clearAll,
};
