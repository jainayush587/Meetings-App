import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://mymeetingsapp.herokuapp.com/api/';

class UserService {
  // getPublicContent() {
  //   return axios.get(API_URL + 'all');
  // }

  getUserBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }

  getMeetingsOnDate(date){
    return axios.get(API_URL + 'calendar', { 
      params:{
        date: date
      },
      headers: authHeader() 
    });
  }

  // getModeratorBoard() {
  //   return axios.get(API_URL + 'mod', { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }
}

export default new UserService();
