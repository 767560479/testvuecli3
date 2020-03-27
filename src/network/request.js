import axiso from 'axios'

// 第一种 

// export function request(config, success, failure) {

//     // 1. 创建实例。
//     const instance = axiso.create({
//         baseURL: 'http://123.207.3232:8000',
//         timeout: 5000
//     })

//     // 发送网络请求
//     instance(config)
//         .then(res => {
//             console.log(res);
//             success(res);
//         })
//         .catch(err => {
//             console.log(err);
//             failure(err)
//         })
// }

// 第二种

// export function request(config) {

//     // 1. 创建实例。
//     const instance = axiso.create({
//         baseURL: 'http://123.207.3232:8000',
//         timeout: 5000
//     })

//     // 发送网络请求
//     instance(config.baseConfig)
//         .then(res => {
//             console.log(res);
//             config.success(res);
//         })
//         .catch(err => {
//             console.log(err);
//             config.failure(err)
//         })
// }

// 第三种
// export function request(config) {

//   return new Promise((resolve, reject) => {
//         // 1. 创建实例。
//         const instance = axiso.create({
//             baseURL: 'http://123.207.3232:8000',
//             timeout: 5000
//         })

//         // 发送网络请求
//         instance(config)
//             .then(res => {
//                resolve(res)
//             })
//             .catch(err => {
//                 console.log(err);
//                 reject(err)
//             })
//   })
// }

export function request(config) {


    // 1. 创建实例。
    const instance = axiso.create({
        baseURL: 'http://123.207.3232:8000',
        timeout: 5000
    })

    // 2.1 请求拦截器
    instance.interceptors.request.use(config => {
        console.log(config);
        return config;
    }, err => {
        console.log(err)
    })

    // 2.2 响应拦截
    instance.interceptors.response.use(res => {
        console.log(res);
        return res.data;
    }, err => {
        console.log(err);
    })

    // 发送网络请求
    return instance(config)


}