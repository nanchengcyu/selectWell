/*// {
//     "code": 200,
//     "message": "成功",
//     "data": {
//     "records": [
//         {
//             "id": 1,
//             "createTime": "2021-12-10 01:31:41",
//             "updateTime": "2023-04-15 15:48:02",
//             "tmName": "小米",
//             "logoUrl": "39.98.123.211/group1/M00/03/D9/rBHu8mHmKC6AQ-j2AAAb72A3EO0942.jpg"
//         },
//         {
//             "id": 2,
//             "createTime": "2021-12-10 01:31:41",
//             "updateTime": "2023-04-15 15:48:21",
//             "tmName": "苹果",
//             "logoUrl": "http://39.98.123.211/group1/M00/03/D9/rBHu8mHmKHOADErHAAAQBezsFBo612.jpg"
//         },
//         {
//             "id": 3,
//             "createTime": "2021-12-10 01:31:41",
//             "updateTime": "2023-04-15 15:48:28",
//             "tmName": "华为",
//             "logoUrl": "http://39.98.123.211/group1/M00/03/D9/rBHu8mHmKF2AWpcKAADv98DWYRo516.jpg"
//         },
//         {
//             "id": 4,
//             "createTime": "2021-12-10 01:31:41",
//             "updateTime": "2023-04-15 15:48:32",
//             "tmName": "尚硅谷",
//             "logoUrl": "http://39.98.123.211/group1/M00/02/DA/rBHu8mGxObeAfL10AAAsPY94Hn8745.png"
//         },
//         {
//             "id": 5,
//             "createTime": "2021-12-10 01:31:41",
//             "updateTime": "2023-04-15 15:48:35",
//             "tmName": "OPPO",
//             "logoUrl": "http://39.98.123.211/group1/M00/02/DA/rBHu8mGxOciADR75AAE6kN74a-E289.png"
//         },
//         {
//             "id": 6,
//             "createTime": "2021-12-10 01:31:41",
//             "updateTime": "2023-04-15 15:48:38",
//             "tmName": "VIVO",
//             "logoUrl": "http://39.98.123.211/group1/M00/02/DA/rBHu8mGxOdKAamtYAAC9HgX-V4c228.png"
//         },
//         {
//             "id": 7,
//             "createTime": "2021-12-10 01:31:41",
//             "updateTime": "2023-04-15 15:48:42",
//             "tmName": "三星",
//             "logoUrl": "http://39.98.123.211/group1/M00/02/DA/rBHu8mGxOduAL3-vAAAyNxaecgE342.jpg"
//         },
//         {
//             "id": 22,
//             "createTime": "2021-12-10 01:31:41",
//             "updateTime": "2023-04-15 15:48:45",
//             "tmName": "长虹",
//             "logoUrl": "http://39.98.123.211/group1/M00/02/DC/rBHu8mGyMWmAMfrHAAAVOe83Fy0651.jpg"
//         },
//         {
//             "id": 23,
//             "createTime": "2021-12-10 01:31:41",
//             "updateTime": "2023-04-15 15:48:52",
//             "tmName": "索尼",
//             "logoUrl": "http://39.98.123.211/group1/M00/02/DC/rBHu8mGyMX-AUh4sAAAH6bIsT_o073.jpg"
//         },
//         {
//             "id": 24,
//             "createTime": "2021-12-10 01:31:41",
//             "updateTime": "2023-04-15 15:48:56",
//             "tmName": "联想",
//             "logoUrl": "http://39.98.123.211/group1/M00/02/DC/rBHu8mGyMaWAW-TWAAAIiNxy53s540.jpg"
//         }
//     ],
//         "total": 20,
//         "size": 10,
//         "current": 1,
//         "orders": [],
//         "optimizeCountSql": true,
//         "hitCount": false,
//         "countId": null,
//         "maxLimit": null,
//         "searchCount": true,
//         "pages": 2
// },
//     "ok": true
// }*/

//定义接口数据类型
export interface ResponseData {
    code: number,
    message: string,
    data: {},
    ok: boolean
}

//已有品牌数据类型
export interface TradeMark {
    id?: number, //id是数据库新增自动+1 对新增操作不需要填写所以书写为 id?
    tmName: string,
    logoUrl: string
}

//包含全部品牌数据的ts类型
export type Records = TradeMark[];

//获取已有全部品牌的ts类型
export interface TradeMarkResponseData extends ResponseData {
    data: {
        records: Records,
        total: number,
        size: number,
        current: number,
        searchCount: boolean,
        pages: number
    }
}