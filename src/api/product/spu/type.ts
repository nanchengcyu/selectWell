//服务器返回的数据类型
export interface ResponseData {
    code: number,
    message: string,
    data: {},
    ok: boolean
}

export interface SpuData{
    id?:number,
    spuName:string,
    description:string,
    category3Id:string|number,
    tmId:number,
    spuSaleAttrList:null,
    spuImageList:null
}
//后端返回 Records 是数组类型
export type Records = SpuData[];

//定义获取已有的spu接口返回的数据 data的全部类型
export interface HasSpuResponseData extends ResponseData{
    data:{
        records :Records,
        total:number,
        size:number,
        current:number,
        searchCount:boolean,
        pages:number
    }
}

