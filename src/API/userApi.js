import { request } from "./request";


// 获取用户的歌单列表
export async function getUserPlayListById(){
    let id = window.localStorage.getItem('userId')
    const resp = await request(`/user/playlist?uid=${id}`)
    return resp
}
// 获取用户的收藏歌手
export async function getUserSublistArtist(){
    const resp =  await request(`/artist/sublist`)
    return resp
}
// 获取用户的收藏专辑
export async function getUserSublistAlbum(){
    const resp =  await request(`/album/sublist`)
    return resp
}
// 获取用户的收藏视频
export async function getUserSublistMV(){
    const resp =  await request(`/MV/sublist`)
    return resp
}