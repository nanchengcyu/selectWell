//SPU定义后端接口
import request from "@/utils/request.ts";
import {HasSpuResponseData} from "@/api/product/spu/type.ts";


enum API {
    //获取已有的SPU的数据
    HASSPU_URL = '/admin/product/',

}
//获取某一个三级分类下已有的SPU数据
export const reqHasSpu = (page: number, limit: number, category3Id: string | number) => request.get<any, HasSpuResponseData>(API.HASSPU_URL + `${page}/${limit}?category3Id=${category3Id}`);

// export const reqAddOrUpdateTrademark=(data:TradeMark)=>{
//     if (data.id){
//         return request.put<any,any>(API.UPDATETRADEMARK_URL,data)
//     }else {
//         return request.post<any,any>(API.ADDTRADEMARK_URL,data)
//     }
// }