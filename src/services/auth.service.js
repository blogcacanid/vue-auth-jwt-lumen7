import axios from 'axios';

// for Lumen 7 back-end
const API_URL = 'http://localhost:8000/api/auth/';
// for Node.js back-end
// const API_URL = 'http://localhost:9090/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();