import axios from 'axios';
import { AsyncStorage } from "react-native";

import { BASE_URL } from "./ApiConstants";


// axios.interceptors.request.use(async (config) => {
//     const TOKEN = await AsyncStorage.getItem("authToken");

//     if (TOKEN != null) {
//         config.headers.Authorization = 'Bearer ' + TOKEN;
//     }
//     config.baseURL = BASE_URL;
//     return config;
// },
//     function (error) {
//         return Promise.reject(error);
//     });


    export const httpClient = axios;