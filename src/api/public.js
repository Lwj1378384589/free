import axios from 'axios'

// axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type']="application/json"
export default {
    axiosGet (url, params = {}) {
      return new Promise((resolve, reject) => {
        axios.get(url, {params}).then(res => {
          if(res.data.errcode===0){
            resolve(res)
          }else{
            resolve(res)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    axiosPost (url, params = {}) {
      return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
          if(res.data.errcode===0){
            resolve(res)
          }else{
            resolve(res)
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }