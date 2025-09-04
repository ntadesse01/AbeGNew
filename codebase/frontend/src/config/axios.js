//making API calls fetch data from external sources or backends.
//sending from data send data to the server, such as during user login or registration
//handling responses manage data after receiving the server's response.
//error handling gracefully handle errors and display useful messages to user.
import axios from "axios"

 const instance = axios.create({
  baseURL: 'http://localhost:8888/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


export default instance