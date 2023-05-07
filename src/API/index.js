import { request } from "./request";

export function getBannerList(){
    return request('/banner')
}