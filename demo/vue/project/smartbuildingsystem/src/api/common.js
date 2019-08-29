/**
 *  用以请求接口数据
 */

import axios from './axios'

const base = "/api"

/**
 * common
 */
// 上传图片
/*export const getImgURI = params => {
    return  axios({
        url: 'upload',
        method: 'post',
        data: params
    });
};*/

/**
 *  登录/注销/修改密码
 */
// 登录
export const Login = params => {
    return  axios({
        url: `user/login`,
        method: 'get',
        params: params
    });
};

// 修改密码
/* export const ModifyPassword = params => {
    return  axios({
        url: `${base}/user/password/update`,
        method: 'post',
        data: params
    });
};
 */