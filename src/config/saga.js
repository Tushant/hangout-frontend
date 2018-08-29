import { requestJSON } from 'Utils/request';
import { fork, put, call } from 'redux-saga/effects';


import { cookieJar } from 'Utils';

export class Hangout {
  /**
   * Generic api data loader
   */
  static getHeaders() {
    const sessionObj = atob(cookieJar.getSession());
    let sessionValue;
    try {
      sessionValue = JSON.parse(sessionObj);
    } catch (err) {
      sessionValue = { 'Content-Type': 'application/json' };
    }
    return sessionValue;
  }

  static getOptions(type, data) {
    const options = {
      method: type,
      headers: Hangout.getHeaders(),
    };
    return data ? { ...options, body: JSON.stringify(data) } : options;
  }

  static localDataLoader(apiUri, apiType, onSuccess, onError, data, ...actionArguments) {
    return function* requestApi() {
      const requestURL = `${apiUri}`;
      let options = {
        method: apiType,
        'Content-Type': 'text/plain',
      };
      options = data ? { ...options, body: JSON.stringify(data) } : options;

      try {
        const response = yield call(requestJSON, requestURL, options);
        yield put(onSuccess(response, ...actionArguments));
      } catch (err) {
        let error = null;
        try {
          error = {
            code: err.response.status,
            ...(yield call(() => err.response.json())),
          };
        } catch (e) {
          error = {
            code: e.response && e.response.status,
            errors: [e.response && e.response.statusText],
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }

  static dataLoader(apiUri, apiType, onSuccess, onError, data, ...actionArguments) {
    return function* requestApi() {
      const requestURL = `${apiUri}`;
      const options = Hangout.getOptions(apiType, data);
      try {
        const response = yield call(requestJSON, requestURL, options);
        yield put(onSuccess(response, ...actionArguments));
      } catch (err) {
        let error = null;
        try {
          error = {
            code: err.response.status,
            ...(yield call(() => err.response.json())),
          };
        } catch (e) {
          error = {
            code: e.response && e.response.status,
            errors: [e.response && e.response.statusText],
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }

  /*
   * Shorthand GET for locallock box function
   * Use different header
   */
  static getFromLocal(apiUri, onSuccess, onError) {
    return this.localDataLoader(apiUri, 'GET', onSuccess, onError, null);
  }

  /*
   * Shorthand GET function
   */
  static get(apiUri, onSuccess, onError, ...actionArguments) {
    return this.dataLoader(apiUri, 'GET', onSuccess, onError, null, ...actionArguments);
  }

  /*
   * Shorthand POST function
   */
  static post(apiUri, onSuccess, onError, data, ...actionArguments) {
    return this.dataLoader(apiUri, 'POST', onSuccess, onError, data, ...actionArguments);
  }

  /**
   * Shorthand PATCH function
   */
  static patch(apiUri, onSuccess, onError, data, ...actionArguments) {
    return this.dataLoader(apiUri, 'PATCH', onSuccess, onError, data, ...actionArguments);
  }

  /**
   * Shorthand PUT function
   */
  static put(apiUri, onSuccess, onError, data, ...actionArguments) {
    return this.dataLoader(apiUri, 'PUT', onSuccess, onError, data, ...actionArguments);
  }

  /**
   * Shorthand DELETE function
   */
  static delete(apiUri, onSuccess, onError, ...actionArguments) {
    return this.dataLoader(apiUri, 'DELETE', onSuccess, onError, null, ...actionArguments);
  }
}

function* appSaga() {
  console.log('main saga')
}

export default appSaga;
