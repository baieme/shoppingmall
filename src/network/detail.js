import {request} from './axios';
export const getDetail = (iid)=>{
    return request({
        url:'/detail',
        params:{
           iid
        }
    })
}
export const getRecommend = () =>{
    return request({
        url:'/recommend'
    })
}
export class getDate{
    constructor(itemInfo,columns,services){
        this.desc = itemInfo.desc
        this.title = itemInfo.title;
        this.oldPrice = itemInfo.oldPrice;
        this.price = itemInfo.price;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
    }
}
export class getShop{
    constructor(shopInfo){
        this.name = shopInfo.name;
        this.goods = shopInfo.cGoods;
        this.sells = shopInfo.cSells;
        this.services = shopInfo.services;
        this.logo = shopInfo.shopLogo;
        this.score = shopInfo.score;
    }
}