import axios from "axios"

 const configAxios = () =>{
    axios.defaults.baseURL="http://localhost:3000";
    const token = localStorage.getItem('token')
    axios.interceptors.request.use((config)=>{
        if(token){
            config.headers.Authorization=`Bear ${token}`
        }
        return config
    })
}
export default configAxios