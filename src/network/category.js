import {request} from './axios';
export const category = ()=>{
    return request({
        url:'/category',
    })
}
export const getCategory = (maitKey)=>{
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}
export const getCategoryList = (miniWallkey,type)=>{
    return request({
        url:'/subcategory/detail',
        params:{
            miniWallkey,
            type
        }
    })
}