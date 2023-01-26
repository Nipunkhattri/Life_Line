import axios from 'axios'
const api= axios.create({baseURL:"https://lifelineserver.azurewebsites.net/"});
api.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req;
})

export const login = (authdata)=>api.post("/login",authdata);
export const signup = (authdata)=>api.post("/signup",authdata);