//定义后端接口
import request from "@/utils/request.ts";
import {TradeMark, TradeMarkResponseData} from "@/api/product/trademark/type.ts";


enum API {
    //获取已有的品牌接口
    TRADEMARK_URL = "/admin/product/baseTrademark/",
    //添加品牌
    ADDTRADEMARK_URL = '/admin/product/baseTrademark/save',
    //修改已有品牌
    UPDATETRADEMARK_URL = '/admin/product/baseTrademark/update',
}

export const reqHasTrademark = (page: number, limit: number) => request.get<any,TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`);

export const reqAddOrUpdateTrademark=(data:TradeMark)=>{
    if (data.id){
        return request.put<any,any>(API.UPDATETRADEMARK_URL,data)
    }else {
        return request.post<any,any>(API.ADDTRADEMARK_URL,data)
    }
}