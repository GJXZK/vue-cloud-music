import { request } from "./request";
// 轮播图片
export function getBannerList(){
    return request('/banner')
}
// 推荐歌曲 /personalized/newsong
export function getNewsong(){
    return request('/personalized/newsong')
}
// 推荐歌单 /personalized?limit=1
export function getMusicList(){
    return request('/personalized?limit=10')
}