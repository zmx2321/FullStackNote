import axios from './axios'

/**
 * 监控管理
 */
// 获取监控信息(前5条)
export const getMonitor = params => {
    return  axios({
        // url: `${base}/monitor/person/Previous/`,
        url: `/monitor/person/Previous/five`,
        method: 'get',
        // data: params  post
        params: params
    });
};