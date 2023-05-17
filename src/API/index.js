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
// 获取歌曲的url /song/url/v1?id=33894312&level=exhigh
export function getMusicUrl(id){
    return request(`/song/url/v1?id=${id}&level=exhigh`)
}
// 获取歌曲详情 /song/detail?ids=347230
export function getMusicDetail(id){
    return request(`/song/detail?ids=${id}`)
}
// 最佳匹配
export function getMultimatch(keyword){
    return request(`/search/multimatch?keywords=${keyword}`)
}
// 搜索歌曲  /cloudsearch?keywords=海阔天空
export function getSearch(keyword){
    return  request(`/cloudsearch?keywords=${keyword}`)
}


// 歌单
export function getMusicListDetailById(id){
    // var timestamp = Date.parse(new Date());
    // return request(`/playlist/detail?id=${id}&timestamp=${timestamp}`)
    return request(`/playlist/detail?id=${id}`)
}