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
export function getSearch(keyword,type){
    return  request(`/cloudsearch?keywords=${keyword}&type=${type}`)
}
// 搜索歌手 
// 获取歌词
export function getLyric(id){
    return request(`/lyric?id=${id}`)
}
// 获取歌曲最近评论
export function getMusicComments(id){
    return request(`/comment/music?id=${id}&limit=10`)
}
// 获取歌曲热评  需要传入两个参数 id 类型0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台节目 5: 视频 6: 动态 7: 电台
export function getMusicHotComments(id,type){
    return request(`/comment/hot?id=${id}&type=${type}`)
}


// 歌手
// 获取歌手详情
export function getSingerDetail(id){
    return request(`/artist/detail?id=${id}`)
}
// 获取歌手热门50首歌
export function getSingerTopSongs(id){
    return request(`/artist/top/song?id=${id}`)
}
// 获取歌手的专辑
export function getSingerAlbum(id){
    return request(`/artist/album?id=${id}`)
}
// 获取歌手MV
export function getSingerMV(id){
    return request(`/artist/mv?id=${id}`)
}

// 获取MV详情
export function getMVDetail(id){
    return request(`/mv/detail?mvid=${id}`)
}

// 获取MV url /mv/url?id=10896407&r=1080
export function getMVUrl(id){
    return request(`/mv/url?id=${id}&r=1080`)
}
// 获取MV评论
export function getMVComments(id){
    return request(`/comment/mv?id=${id}`)
}
// 获取相似MV /simi/mv?mvid=5436712
export function getMVsimi(id){
    return request(`/simi/mv?mvid=${id}`)
}

// 获取视频详情 
export function getVideoDetail(id){
    return request(`/video/detail?id=${id}`)
}
// 获取视频链接
export function getVideoUrl(id){
    return request(`/video/url?id=${id}`)
}
// 获取视频评论 /comment/video?id=89ADDE33C0AAE8EC14B99F6750DB954D
export function getVideoComments(id){
    return request(`/comment/video?id=${id}`)
}
// 获取相关视频  
export function getVideoRelated(id){
    return request(`/related/allvideo?id=${id}`)
}

// 专辑
// 获取专辑内容
export function getAlbumDetail(id){
    return request(`/album?id=${id}`)
}

// 歌单
// 获取歌单详情
export function getMusicListDetailById(id){
    // var timestamp = Date.parse(new Date());
    // return request(`/playlist/detail?id=${id}&timestamp=${timestamp}`)
    return request(`/playlist/detail?id=${id}`)
}
// 获取歌单评论
export function getMusicListComment(id,page){
    return request(`/comment/playlist?id=${id}&limit=50&offset=${(page-1)*50}`)
}


