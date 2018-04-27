import api from './public'

export const unitLogin=(params)=>{
    return api.fetchPost('/apis/api/login/platform/corp/login',params)
}
