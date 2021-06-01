import axios from '../hooks/useFetch';

export async function login(router,email,password){
  let apiCall= await axios(router).post("/api/login",{email,password});
  return apiCall;
}

export async function getUserList(router,pageNumber){
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    "Authorization": token,
  };
  let apiCall= await axios(router).get(`/api/users?page=${pageNumber}`,{headers:headers});
  return apiCall.data;
}