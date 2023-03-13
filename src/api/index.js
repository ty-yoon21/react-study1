// import axios from 'axios';

// export default
//     axios.create({
//         timeout: 2000
//     });



//https://velog.io/@wooya/axios-interceptors%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-token%EB%A7%8C%EB%A3%8C%EC%8B%9C-refreshToken-%EC%9E%90%EB%8F%99%EC%9A%94%EC%B2%AD 참고
import axios from "axios";

// url 호출 시 기본 값 셋팅
const api = axios.create({
    //timeout: 2000
    //headers: { "Content-type": "application/json" }, // data type
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("jwt-access");

    //요청시 AccessToken 계속 보내주기
    if (!token) {
      config.headers.accessToken = null;
      //config.headers.refreshToken = null;
      return config;
    }

    if (config.headers && token) {
      //const { accessToken, refreshToken } = JSON.parse(token);
      config.headers.authorization = `Bearer ${localStorage.getItem("jwt-access")}`;
      //config.headers.refreshToken = `Bearer ${refreshToken}`;
      return config;
    }
    // Do something before request is sent
    console.log("api.interceptors.request.use start", config);
  },
  function (error) {
    // Do something with request error
    console.log("api.interceptors.request.use error", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
    
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("api.interceptors.response.use");
    console.log("get response", response);
    return response;
  },
  async (error) => {
    console.log("api.interceptors.response.error : ",error);
    const {
      config,
      response: { status },
    } = error;
    console.log("api.interceptors.response.status : ",status);
    if (status === 401) {
        console.log("api.interceptors.response. error.response : ",error.response);
        console.log("api.interceptors.response. error.response.data : ",error.response.data);
      if (error.response.data === "AcessExpired") {
        
        console.log("api.interceptors.response AccessExpired config : ", config);
        const originalRequest = config;
        //const refreshToken = await localStorage.getItem("refreshToken");
        // token refresh 요청
        const { data } = await axios.post(
          `/api/auth/refresh`, // token refresh api
          {},
          {}
        );
        // 새로운 토큰 저장
        // dispatch(userSlice.actions.setAccessToken(data.data.accessToken)); store에 저장
        // const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        //   data;
        // await localStorage.multiSet([
        //   ["accessToken", newAccessToken],
        //   ["refreshToken", newRefreshToken],
        // ])

        console.log("api.interceptors.response AccessExpired data.accessToeken : ", config);
        //await localStorage.setItem('jwt-access', data.accessToken);

        await localStorage.setItem('jwt-access', data.token);
        originalRequest.headers.authorization = `Bearer ${localStorage.getItem('jwt-access')}`;
        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
        return axios(originalRequest);
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("response error", error);
    return Promise.reject(error);
  }
);

export default api;