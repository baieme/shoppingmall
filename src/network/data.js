import {request} from './axios.js';
export const getHomeData =()=>{
    return request({
        url:'/home/multidata'
    })
}
export const getHomeGoods =(type,page)=>{
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}

