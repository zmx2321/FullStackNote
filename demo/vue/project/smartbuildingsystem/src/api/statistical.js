import axios from './axios'

/**
 * 统计图模块
 */
// 获取统计图数据
export const get_person_distribution = params => {
    return  axios({
        // url: `${base}/monitor/person/Previous/`,
        url: `/statistics/personFlow/info`,
        method: 'post',
        data: params // post
        // params: params
    });
};
export const get_green_flow = params => {
    return  axios({
        // url: `${base}/monitor/person/Previous/`,
        url: `/statistics/monthSave/info`,
        method: 'post',
        data: params // post
        // params: params
    });
};
export const get_car_flow = params => {
    return  axios({
        // url: `${base}/monitor/person/Previous/`,
        url: `/statistics/carFlow/info`,
        method: 'get',
        // data: params post
        params: params
    });
};