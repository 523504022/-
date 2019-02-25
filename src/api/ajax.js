// 能发送ajax请求的函数模块
// 异步得到的不再是reponse.data数据（result）
// 对请求错误进行了统一的处理，外面使用时，不用再处理错误

import axios from "axios"

export default function ajax(url, data = {}, method = "GET") {
    let promise
    return new Promise((resolve,reject) => {
    // 执行异步请求
    if (method === "GET") {
        promise = axios.get(url, { params: data }) // 指定所有的query参数
    } else {
        promise = axios.post(url, data)
    }
    promise.then(response => {
        // 请求成功，调用resolve
        resolve(response.data)
    }).catch(error => {
        // 请求失败，调用reject
        // 统一处理请求错误,外面使用async、await不用使用try来处理错误
        alert('请求出错',error.message)
    })
  })
}
