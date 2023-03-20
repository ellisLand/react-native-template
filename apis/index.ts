import axios, { AxiosInstance, AxiosResponse } from 'axios'

// 建立一個 Axios 實例
const instance: AxiosInstance = axios.create({
  baseURL: 'https://example.com/api',
})

// 設定攔截器
instance.interceptors.request.use(
  (config) => {
    // 在發送請求前，可對 config 進行修改

    return config
  },
  (error) => {
    // 在發送請求前發生錯誤時，處理錯誤

    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在接收到回應後，可對 response 進行修改

    return response
  },
  (error) => {
    // 在接收回應時發生錯誤時，處理錯誤

    return Promise.reject(error)
  }
)

// 使用實例進行請求
instance
  .get('/users')
  .then((response: AxiosResponse) => {
    // 請求成功後的處理
  })
  .catch((error) => {
    // 請求失敗後的處理
  })
