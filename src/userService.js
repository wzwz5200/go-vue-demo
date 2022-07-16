import axios from "@/axios"
const config = {
    headers:{
        'Content-Type': 'multipart/form-data'
    }
  };
const login =( { Name}) => {

    return axios.post('http://localhost:9090/api/login', Name,config);

}


export default {
    login,
};