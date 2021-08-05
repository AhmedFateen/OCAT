import Axios from '../utils/http.config';

export class UserService {
  static submit(pass) {
    try {
      return Axios.post(`assessment/login`, { pass })
        .then(response => response.data);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }
}
