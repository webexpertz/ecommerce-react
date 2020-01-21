// General api to access data
import axios from 'axios';
import { BASE_URL } from "./ApiConstants"

export default function DynamicApi(path, params, method) {


 return axios({   
  url: path,
  method: method, 
  baseURL: BASE_URL,
  data: params,
  responseType: 'json'  
  })
  .then(function(response) {   

    return response.data; 
  })
  .catch(error => {

        throw error;
  });


}


