import axios from 'axios';

// for Lumen 7 back-end
const API_URL = 'http://localhost:8000/api/test/';
// for Node.js back-end
// const API_URL = 'http://localhost:9090/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }
}

export default new UserService();