/**
 *  用以请求接口数据
 */

import axios from './axios'

const base = "/admin"

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
        url: `${base}/user/login`,
        method: 'post',
        data: params
    });
};

// 修改密码
export const ModifyPassword = params => {
    return  axios({
        url: `${base}/user/password/update`,
        method: 'post',
        data: params
    });
};

/**
 * 账号管理
 */
// 获取账号列表
export const getUser = params => {
    return  axios({
        url: `${base}/user/list`,
        method: 'get',
        params: params
    });
};
