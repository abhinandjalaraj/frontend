import { baseurl } from "@/utils/BaseUrl";
import axios from "axios";

export const axiosConfig=axios.create({
    baseURL:baseurl,
    // headers:{
    //     "Content-Type":"application/json"
    // },

})
export default axiosConfig;